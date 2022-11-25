import React, { useContext, useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { ThemeContext } from '../context.js';
import { Box } from '@chakra-ui/react';
import MainLayout from '../components/layouts/main';
import DaySideBar from '../components/day-view/day-side-bar';
import TableView from '../components/analytics/table-view';

const getDayBoundary = (date) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  const today = date.getFullYear() + '-' + month + '-' + day;
  return {
    fromDate: `${today} 00:00:00`,
    toDate: `${today} 23:59:59`,
  };
};

const Page = () => {
  const { theme } = useContext(ThemeContext);
  const [programData, setProgramData] = useState([]);
  const [todayDate, setTodayDate] = useState(new Date());

  useEffect(() => {
    async function load_data() {
      const date = getDayBoundary(todayDate);
      setProgramData(await invoke('get_analitycs', date));
    }
    load_data();
  }, [todayDate]);

  const dayChanged = (date) => {
    setTodayDate(date);
    console.log('Day changed', date);
  };

  return (
    <MainLayout>
      <Box>
        <DaySideBar dayChanged={dayChanged} />
        <TableView data={programData} />
      </Box>
    </MainLayout>
  );
};

export default Page;
