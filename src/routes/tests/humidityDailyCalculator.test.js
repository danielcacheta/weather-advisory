const humidityDailyCalculator = require('../server/humidityDailyCalculator');
const rainyDayData = require('./testData/rainyDayData.json').weatherData;
const sunnyDayData = require('./testData/sunnyDayData.json').weatherData;

/**
 * Humidity Daily Calculator Tests
 */
test('Humidity Daily Calculator For a Rainy Day', () => {
  const weatherData = rainyDayData;

  const expectedResult = [{
    date: new Date(2020, 1, 20),
    humidity: 84.5
  }];

  const result = humidityDailyCalculator.calculate(weatherData);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
});

test('Humidity Daily Calculator For a Sunny Day', () => {
  const weatherData = sunnyDayData;

  const expectedResult = [{
    date: new Date(2020, 1, 23),
    humidity: 37
  }];

  const result = humidityDailyCalculator.calculate(weatherData);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
});

test('Humidity Daily Calculator Must Filter By Period', () => {
  const weatherData = sunnyDayData;

  const expectedResult = [{
    date: new Date(2020, 1, 23),
    humidity: 36.5
  }];

  const periodFilter = {
    initialTime: 12,
    finalTime: 15
  };

  const result = humidityDailyCalculator.calculate(weatherData, periodFilter);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
});

test('Humidity Daily Calculator Must Filter By InitialTime if does not Contain FinalTime', () => {
  const weatherData = sunnyDayData;

  const expectedResult = [{
    date: new Date(2020, 1, 23),
    humidity: 37.5
  }];

  const periodFilter = {
    initialTime: 18,
  };

  const result = humidityDailyCalculator.calculate(weatherData, periodFilter);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
});

test('Humidity Daily Calculator Must Filter By FinalTime if does not Contain InitialTime', () => {
  const weatherData = sunnyDayData;

  const expectedResult = [{
    date: new Date(2020, 1, 23),
    humidity: 35
  }];

  const periodFilter = {
    finalTime: 6,
  };

  const result = humidityDailyCalculator.calculate(weatherData, periodFilter);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
});

test('Humidity Daily Calculator For a Rainy and a Sunny Day', () => {
  const weatherData = rainyDayData;
  sunnyDayData.forEach((element) => {
    weatherData.push(element);
  });

  const expectedResult = [{
    date: new Date(2020, 1, 20),
    humidity: 84.5
  },
  {
    date: new Date(2020, 1, 23),
    humidity: 37
  }];

  const result = humidityDailyCalculator.calculate(weatherData);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
  expect(result[1].date).toBe(expectedResult[1].date.getTime());
  expect(result[1].humidity).toBe(expectedResult[1].humidity);
});

test('Humidity Daily Calculator Returns Sorted by Date', () => {
  const weatherData = sunnyDayData;
  rainyDayData.forEach((element) => {
    weatherData.push(element);
  });

  const expectedResult = [{
    date: new Date(2020, 1, 20),
    humidity: 84.5
  },
  {
    date: new Date(2020, 1, 23),
    humidity: 37
  }];

  const result = humidityDailyCalculator.calculate(weatherData);
  expect(result[0].date).toBe(expectedResult[0].date.getTime());
  expect(result[0].humidity).toBe(expectedResult[0].humidity);
  expect(result[1].date).toBe(expectedResult[1].date.getTime());
  expect(result[1].humidity).toBe(expectedResult[1].humidity);
});
