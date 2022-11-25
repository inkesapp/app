import { Box, Stack, useStyleConfig, Link } from '@chakra-ui/react';
import Ract, { useContext } from 'react';
import { ThemeContext } from '../context';

const NavBarButton = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box color={theme.white} _hover={{ bg: theme.accent }} px="5px">
      {children}
    </Box>
  );
};

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box position="fixed" w="100%" p="1px" bg={theme.lightBg}>
      <Stack
        direction="row"
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, nmd: 0 }}
        p={0.5}
        spacing={1}
      >
        <NavBarButton href="/works">Settings</NavBarButton>
        <NavBarButton href="/posts">Add</NavBarButton>
        <NavBarButton href="/works">View</NavBarButton>
        <NavBarButton href="/posts">Filter</NavBarButton>
      </Stack>
    </Box>
  );
};

export default NavBar;
