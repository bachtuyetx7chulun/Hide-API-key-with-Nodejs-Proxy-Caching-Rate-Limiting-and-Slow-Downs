const epxress = require('express');
const baseRoute = require('./base.router');
const router = epxress.Router();

router.use('/', baseRoute);

module.exports = router;
