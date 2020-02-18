const getDateTimeFromTimestamp = (unixTimestampDate) => {
  return new Date(unixTimestampDate * 1000);
};

const getDateFromTimestamp = (unixTimestampDate) => {
  let date = getDateTimeFromTimestamp(unixTimestampDate);
  date = date.setHours(0, 0, 0, 0);
  return date;
};

const filterByPeriod = (weatherData, periodFilter) => {
  if (!periodFilter) return weatherData;

  const filteredData = [];
  weatherData.forEach((element) => {
    const elementHours = getDateTimeFromTimestamp(element.dt).getHours();
    if ((!periodFilter.initialTime || elementHours >= periodFilter.initialTime)
      && (!periodFilter.finalTime || elementHours <= periodFilter.finalTime)) {
      filteredData.push(element);
    }
  });

  return filteredData;
};

const groupByDate = (weatherData) => {
  const groupData = [];
  weatherData.forEach((element) => {
    const elementDate = getDateFromTimestamp(element.dt);
    const index = groupData.map((e) => e.date).indexOf(elementDate);
    if (index < 0) {
      groupData.push(
        {
          date: elementDate,
          humidity: [element.main.humidity]
        }
      );
    } else {
      groupData[index].humidity.push(element.main.humidity);
    }
  });
  return groupData;
};

const calculateAverageHumidity = (humidities) => {
  return humidities.reduce((prev, curr) => prev + curr) / humidities.length;
};

const calculateDailyAverageHumidity = (groupData) => {
  const dailyData = [];
  groupData.forEach((element) => {
    dailyData.push({
      date: element.date,
      humidity: calculateAverageHumidity(element.humidity)
    });
  });
  return dailyData;
};

const sortDailyAverageData = (dailyData) => {
  return dailyData.sort((a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  });
};

const calculate = (weatherData, periodFilter) => {
  const filteredData = filterByPeriod(weatherData, periodFilter);

  const groupData = groupByDate(filteredData);

  const dailyData = calculateDailyAverageHumidity(groupData);

  const sortedDailyData = sortDailyAverageData(dailyData);

  return sortedDailyData;
};

module.exports.calculate = calculate;
