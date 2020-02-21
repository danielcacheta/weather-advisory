# Weather Advisory

This project fetches data from https://openweathermap.org/api to advise if it is recommended to carry on an umbrella with you or if it is expected be a sunny day

The tools used on this project are:
  - Express
  - ESLint
  - Jest

### Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.
It is recommended to download the latest stable version using [NVM](https://github.com/creationix/nvm)

To install the devDependencies:
```sh
$ npm install -d
```

To run unit tests:
```sh
$ npm test
```

To start the server:
```sh
$ npm start
```

To run on debug mode
```sh
$ DEBUG=* node server.js
```
When it starts with npm start, it does not display too much content on console and keeps listening to file changes so nodemon can restart the application.

When it starts on debug mode, it shows more log messages as this example:

![Debug_Mode](https://github.com/danielcacheta/weather-advisory/blob/master/images/debug-console.png)

### Check weather forecast for the next days

The application starts on Port 4000

Weather forecast for the next 5 days is displayed on [Weather Forecast URL](http://localhost:4000/forecast) as it shows below:

![Forecast_Next_5_Days](https://github.com/danielcacheta/weather-advisory/blob/master/images/forecast-next-days.png)
