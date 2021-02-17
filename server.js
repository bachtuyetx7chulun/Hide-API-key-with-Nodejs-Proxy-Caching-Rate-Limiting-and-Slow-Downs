const express = require('express');
const rateLimit = require("express-rate-limit");
const slowDown = require("express-slow-down");

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 10, // allow 100 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request above 100:
});

// TODO: Limit a request if it has exceed 
app.use(speedLimiter);
app.use(limiter);


app.get("/", (req, res) => {
    res.json({
        message: "The request is ready ...",
        ip: req.ip
    })
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})