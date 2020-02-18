const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('tiny'));

const weatherRouter = require('./src/routes/server/weatherRoute')();

app.use('/weather', weatherRouter);
app.get('/', (req, res) => {
  res.redirect('/weather');
});

app.listen(port, () => {
  debug(`Listening on port ${chalk.green(port)}`);
});
