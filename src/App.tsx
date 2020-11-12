import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from "@material-ui/core/colors";
import { atom, Provider } from 'jotai';
import { Work } from './pages/Work';

const darkTheme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    type: 'dark',
    primary: {
      // main: '#3e62ad',
      main: '#f39800',
    },
    secondary: colors.orange,
  },
});

export const themeAtom = atom(darkTheme);

const App = () => {

  return (
    <Provider>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Work />
      </MuiThemeProvider>
    </Provider>

  );
}

export default App;
