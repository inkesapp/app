import { Box, Stack, Button } from '@chakra-ui/react';
import { ThemeContext } from '../../context.js';
import React, { useContext, useState, useEffect } from 'react';
import getCurrentWeekInfo from '../../lib/week.js';

const DayButton = ({ dayName, dayDate, isActive, toggleDay }) => {
  const { theme } = useContext(ThemeContext);

  const dayStyle = {
    _hover: { bg: theme.accent600 },
    bg: isActive ? theme.accent : 'none',
    borderRadius: 'none',
    flexGrow: 1,
    borderBottom: '1px',
    borderColor: isActive ? theme.accent : theme.lightGray,
  };

  return (
    <Button {...dayStyle} onClick={toggleDay(dayName, dayDate)}>
      {dayName}
    </Button>
  );
};

const DaySideBar = ({dayChanged}) => {
  const { theme } = useContext(ThemeContext);

  const toggleDay = (dayName, date) => (e) => {
    setActiveDay(dayName);
    dayChanged(date)
  };

  const logProgramInfoArr = () => {
    invoke('get_analitycs', {
      fromDate: '2022-10-01 00:00:00',
      toDate: '2022-12-01 00:00:00',
    }).then((message) => console.log(message));
  };

  const [weekInfo, setWeekInfo] = useState({});
  const [activeDay, setActiveDay] = useState('');

  useEffect(() => {
    const info = getCurrentWeekInfo();
    setWeekInfo(info);
    setActiveDay(info.currentDayName);
  }, []);

  return (
    <Stack
      spacing={0}
      position="fixed"
      width="100px"
      height="calc(100vh - 20px)"
      bg={theme.darkGray}
      display="flex"
    >
      {weekInfo.week && activeDay && weekInfo.week.map((day, i) => (
        <DayButton
          dayName={day.name}
	  dayDate={day.date}
          toggleDay={toggleDay}
          isActive={activeDay === day.name}
          key={i}
        />
      ))}
    </Stack>
  );
};

export default DaySideBar;
