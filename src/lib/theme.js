import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const darkColorsMap = {
  accentColor: '#008080',
  black: '#2b2b2b',
  red: '#DC143C',
  gray: '#9a9a9a',
  green: '#008080',
};

const lightColorsMap = {
  accentColor: '#88ccca',
  black: '#2b2b2b',
  red: '#e65a76',
  gray: '#cecece',
  green: '#88ccca',
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#ffffff', '#2b2b2b')(props),
    },
  }),
};

const components = {
  SettingsTabs: {
    baseStyle: (props) => ({
      position: 'fixed',
      w: '20vw',
      h: '100vh',
      bg: mode('#cecece', '#2b2b2b')(props),
      pl: '20px',
      pt: '3vh',
    }),
  },
  SettingsPage: {
    baseStyle: (props) => ({
      w: '80vw',
      minH: '100vh',
      ml: '20vw',
      px: '1vw',
      py: '3vh',
      bg: mode('#fff', '#000')(props),
    }),
  },
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Divider: {
    variants: {
      'day-button': (props) => ({
        borderColor: mode('#2b2b2b', '#ff63c3')(props),
      }),
    },
  },
  Button: {
    variants: {
      day: (props) => ({
        backgroundColor: mode('#f5f5f5', '#1b1b1b')(props),
        borderRadius: 0,
        borderBottom: '1px solid',
        borderRight: '1px solid',
        borderColor: mode('#cecece', '#000')(props),
        height: '14.285%',
        _hover: {
          bg: mode(
            lightColorsMap.accentColor,
            darkColorsMap.accentColor,
          )(props),
        },
      }),
      'day-active': (props) => ({
        backgroundColor: mode(
          lightColorsMap.accentColor,
          darkColorsMap.accentColor,
        )(props),
        borderRadius: 0,
        borderBottom: '1px solid',
        borderRight: '1px solid',
        borderColor: mode('#cecece', '#000')(props),
        height: '14.285%',
        _hover: { bg: mode(lightColorsMap.accentColor, darkColorsMap)(props) },
      }),
      tag: (props) => ({
        h: '20px',
        px: '5px',
        width: 'max-content',
        fontSize: '12px',
        bg: mode(
          lightColorsMap[props.tagStyle],
          darkColorsMap[props.tagStyle],
        )(props),
      }),
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
  NavBar: {
    baseStyle: (props) => ({
      bg: mode('#cecece', '#000000')(props),
    }),
  },
  NavBarButton: {
    baseStyle: (props) => ({
      as: 'button',
      transition: 'all 0.2s cubic-bezier(.08,.52,.52,1)',
      px: '8px',
      fontSize: '14px',
      fontWeight: 'semibold',
      cursor: 'pointer',
      // bg: mode("#f5f6f7", "#2b2b2b")(props),
      color: mode('#000000', '#cecece')(props),
      _hover: { bg: mode('#fcfcff', '#3a3a3a')(props) },
      _active: {
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: '#bec3c9',
      },
    }),
  },
};

const fonts = {
  heading: "'M PLUS  Rounded 1c'",
};

const colors = {};

const config = {
  initialColorMode: 'dark',
  uesSystemColorMode: true,
};

const theme = extendTheme({
  colors,
  config,
  styles,
  components,
  fonts,
});

export default theme;
