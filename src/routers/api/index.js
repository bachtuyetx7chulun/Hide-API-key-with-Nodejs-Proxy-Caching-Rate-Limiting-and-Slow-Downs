const axios = require('axios');
const express = require('express');
const router = express.Router();
const { API_KEY } = require('../../configs');

const BASE_URL = 'https://api.nasa.gov/insight_weather/?';
const PARAMS = new URLSearchParams({
  api_key: API_KEY,
  feedtype: 'json',
  ver: '1.0',
});

let cacheTime;
let cacheData;

console.log(`${BASE_URL}${PARAMS}`);

router.get('/', async (req, res, next) => {
  if (cacheTime && cacheTime > Date.now() - 30 * 1000) {
    return res.json({
      time: (Date.now() - cacheTime) / 1000,
      data: cacheData,
    });
  }

  try {
    const { data } = await axios.get(`${BASE_URL}${PARAMS}`);
    cacheTime = Date.now();
    cacheData = data;

    return res.json({
      time: 0,
      data: data,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
