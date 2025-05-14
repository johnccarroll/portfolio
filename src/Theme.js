import { createTheme } from "@mui/material";

// Define common colors
const commonColors = {
  primary: "#5cb68e",
  secondary: "#6cf8b2",
  hover: "#539E8B",
  white: "#FEFFFF",
  black: "#000000",
  gray: "#323232",
};

export const lightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: commonColors.white,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: commonColors.secondary,
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: commonColors.white,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: commonColors.white,
    },
    backgroundSecondary: {
      main: commonColors.primary,
    },
    buttonHover: {
      main: commonColors.hover,
    },
    textMain: {
      main: commonColors.black,
      nav: commonColors.white,
    },
    textSecondary: {
      main: commonColors.gray,
    },
  },
});

export const darkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          height: "0.4em",
          backgroundColor: "#171717",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: commonColors.secondary,
        },
        "*": {
          boxSizing: "unset",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: commonColors.white,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 960,
      md: 1048,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      main: "#171717",
    },
    backgroundSecondary: {
      main: commonColors.primary,
    },
    buttonHover: {
      main: commonColors.hover,
    },
    textMain: {
      main: commonColors.white,
      nav: commonColors.white,
    },
    textSecondary: {
      main: commonColors.secondary,
    },
  },
});