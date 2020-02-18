const adviceDisplayer = require('../server/adviceDisplayer');

/**
 * Advice Displayer Tests
 */
test('Display Advice For 5 Rainy Days Starting on Thursday', () => {
  const dailyData = [
    { date: 1582167600000, humidity: 84.25 },
    { date: 1582254000000, humidity: 92.875 },
    { date: 1582340400000, humidity: 90.375 },
    { date: 1582426800000, humidity: 93.375 },
    { date: 1582513200000, humidity: 96.125 }
  ];

  const expectedResult = 'You should take an umbrella in these days: Thursday, Friday, Saturday, Sunday and Monday.';

  const result = adviceDisplayer.display(dailyData);
  expect(result).toBe(expectedResult);
});

test('Display Advice For 2 Rainy Days Starting on Saturday', () => {
  const dailyData = [
    { date: 1582167600000, humidity: 64.25 },
    { date: 1582254000000, humidity: 52.875 },
    { date: 1582340400000, humidity: 90.375 },
    { date: 1582426800000, humidity: 43.375 },
    { date: 1582513200000, humidity: 96.125 }
  ];

  const expectedResult = 'You should take an umbrella in these days: Saturday and Monday.';

  const result = adviceDisplayer.display(dailyData);
  expect(result).toBe(expectedResult);
});

test('Display Advice For 1 Rainy Day on Saturday', () => {
  const dailyData = [
    { date: 1582167600000, humidity: 64.25 },
    { date: 1582254000000, humidity: 52.875 },
    { date: 1582340400000, humidity: 90.375 },
    { date: 1582426800000, humidity: 43.375 },
    { date: 1582513200000, humidity: 46.125 }
  ];

  const expectedResult = 'You should take an umbrella this day: Saturday.';

  const result = adviceDisplayer.display(dailyData);
  expect(result).toBe(expectedResult);
});

test('Display Message When There is No Rain For The Next 5 Days', () => {
  const dailyData = [
    { date: 1582167600000, humidity: 64.25 },
    { date: 1582254000000, humidity: 52.875 },
    { date: 1582340400000, humidity: 60.375 },
    { date: 1582426800000, humidity: 43.375 },
    { date: 1582513200000, humidity: 46.125 }
  ];

  const expectedResult = 'There is no rain for the next 5 days. You\'re good to go!';

  const result = adviceDisplayer.display(dailyData);
  expect(result).toBe(expectedResult);
});