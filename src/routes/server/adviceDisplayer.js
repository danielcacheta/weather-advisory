const getWeekday = (date) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const day = date.getDay();
  return weekdays[day];
};

const getAdviceMessage = (rainyDays) => {
  let adviceMessage = '';

  const rainyWeekDays = `${rainyDays.slice(0, -1).join(', ')} and ${rainyDays.slice(-1)}`;
  const multipleDaysMessage = `You should take an umbrella in these days: ${rainyWeekDays}.`;
  const singleDayMessage = `You should take an umbrella this day: ${rainyDays}.`;
  const noRainMessage = 'There is no rain for the next 5 days. You\'re good to go!';

  if (rainyDays.length > 1) adviceMessage = multipleDaysMessage;
  else if (rainyDays.length === 1) adviceMessage = singleDayMessage;
  else adviceMessage = noRainMessage;

  return adviceMessage;
};

const display = (dailyData) => {
  const rainyDays = [];
  dailyData.forEach(element => {
    if (element.humidity > 70) {
      rainyDays.push(getWeekday(new Date(element.date)));
    }
  });

  return getAdviceMessage(rainyDays);
};

module.exports.display = display;
