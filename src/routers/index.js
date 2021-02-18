const epxress = require('express');
const baseRoute = require('./base.router');
const weatherRoute = require('./api');
const router = epxress.Router();

router.use('/', baseRoute);
router.use('/weather', weatherRoute);

module.exports = router;
