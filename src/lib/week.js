const short2longDayMapping = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesay',
  'Thursday',
  'Fireday',
  'Saturday',
];

const getCurrentWeekInfo = () => {
  let currentDate = new Date();
  const currentDayName = short2longDayMapping[currentDate.getDay()];
  let week = [];

  for (let i = 0; i < 7; ++i) {
    let first = currentDate.getDate() - currentDate.getDay() + i;
    let day = new Date(currentDate.setDate(first));
    let name = short2longDayMapping[day.getDay()];
    week.push({
      name,
      date: day,
      isToday: currentDayName === name,
    });
  }

  return { week, currentDayName };
};

export default getCurrentWeekInfo;
