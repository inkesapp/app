import NextLink from 'next/link';
import {
  Stack,
  Button,
  Box,
  Divider,
  Heading,
  Link,
  useColorMode,
  useStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

const SettingsTabs = ({ children }) => {
  const styles = useStyleConfig('SettingsTabs');
  return <Stack __css={styles}>{children}</Stack>;
};

const SettingsCategory = ({ children }) => {
  return <Link textAlign="left">{children}</Link>;
};

const SettingsPage = ({ children }) => {
  const styles = useStyleConfig('SettingsPage');
  return <Stack __css={styles}>{children}</Stack>;
};

const ExitSettingsButton = ({ children }) => {
  return (
    <NextLink href="/" passHref>
      <Link position="absolute" bottom={0} pb="10px">
        {children}
      </Link>
    </NextLink>
  );
};

const Settings = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display="flex">
      <SettingsTabs>
        <SettingsCategory>Global</SettingsCategory>
        <SettingsCategory>Tags</SettingsCategory>
        <SettingsCategory>Defaults</SettingsCategory>
        <ExitSettingsButton>Go back</ExitSettingsButton>
      </SettingsTabs>
      <SettingsPage>
        <Heading as="h1" w="100%">
          Theme
        </Heading>
        <Divider mb="10px" />
        <Button onClick={toggleColorMode}>Toggle theme</Button>
      </SettingsPage>
    </Box>
  );
};

export default Settings;
