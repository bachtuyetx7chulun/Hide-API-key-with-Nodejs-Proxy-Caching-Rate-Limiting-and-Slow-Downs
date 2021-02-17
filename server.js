const express = require('express');
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 100 requests per windowMs
});


app.use(limiter);
// TODO: Limit a request if it has exceed 

app.get("/", (req, res) => {
    res.json({
        message: "The request is ready ..."
    })
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})