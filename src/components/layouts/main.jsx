import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import Navbar from '../navbar';
import { Box } from '@chakra-ui/react';

const MainLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <Box color={theme.white} pt="30px">
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
