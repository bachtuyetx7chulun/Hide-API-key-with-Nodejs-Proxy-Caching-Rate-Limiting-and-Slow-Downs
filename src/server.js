const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');

const libs = require('./utils');
const middlewares = require('./middleware');
// TODO: Create new express app instance
const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(libs.limiter);
app.use(libs.speedLimiter);

app.use('/api/v1/', require('./routers'));

app.use(middlewares.notFound);
app.use(middlewares.handleError);

module.exports = app;
