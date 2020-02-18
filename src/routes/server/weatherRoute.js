const express = require('express');
const debug = require('debug')('app:weatherRoute');
const weatherApiIntegration = require('../../integrations/server/weatherApiIntegration');
const humidityDailyCalculator = require('./humidityDailyCalculator');
const adviceDisplayer = require('./adviceDisplayer');
const settings = require('../../../settings.json');

const weatherRouter = express.Router();

function router() {
  weatherRouter.route('/')
    .get((req, res) => {
      debug('Call Weather API');
      weatherApiIntegration.callApi()
        .then((weatherForecastResult) => {
          debug('Calculate daily humidities for the next 5 days');
          const dailyHumidities = humidityDailyCalculator.calculate(weatherForecastResult, settings.periodFilter);
          debug('Write recommendation for next 5 days');
          const weatherAdvice = adviceDisplayer.display(dailyHumidities);
          res.send(weatherAdvice);
        });
    });

  return weatherRouter;
}

module.exports = router;
