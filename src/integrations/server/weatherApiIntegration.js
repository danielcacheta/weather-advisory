const http = require('http');
const chalk = require('chalk');
const debug = require('debug')('integration');
const settings = require('../../../settings.json');

const weatherApiIntegration = {
  callApi: () => new Promise((resolve, reject) => {
    const apiUrl = settings.apiUrl
      .replace('{city_name}', settings.city)
      .replace('{api_key}', settings.apiKey);

    const requestOptions = {
      timeout: 1000
    };

    http.get(apiUrl, requestOptions, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => resolve(JSON.parse(data).list));
    }).on('error', (err) => {
      const errorMessage = `Error: ${err.message}`;
      debug(`${chalk.red(errorMessage)}`);
      reject(errorMessage);
    });
  })
};

module.exports = weatherApiIntegration;
