# Weather Advisory

This project fetches data from https://openweathermap.org/api to advise if it is recommended to carry on an umbrella with you or if it is expected be a sunny day

The tools used on this project are:
  - Express
  - ESLint
  - Jest

### Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.
It is recommended to download the latest stable version using [NVM](https://github.com/creationix/nvm)

Install the dependencies and devDependencies and start the server.

```sh
$ cd library
$ npm install -d
$ npm start
```

To run unit tests

```sh
$ cd library
$ npm install -d
$ npm test
```

To run on debug mode
```sh
$ DEBUG=* node server.js
```

### Check weather forecast for the next days

Weather forecast for the next 5 days is displayed on [Weather Forecast URL](http://localhost:4000/forecast)