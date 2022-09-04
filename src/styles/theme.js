import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light'
    // primary: {
    //   main: '#afb'
    // },
    // secondary: {
    //   main: '#aaa',
    //   contrastText: '#333'
    // },
    // background: {
    //   default: '#ddd'
    // }
  },
  typography: {
    fontFamily: 'Open Sans'
  },
  components: {
    MuiAvatarGroup: {
      styleOverrides: {
        avatar: {
          width: 30,
          height: 30
        }
      }
    }
  }
});

export default theme;
