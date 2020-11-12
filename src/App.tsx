import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from "@material-ui/core/colors";
import { atom, Provider, useAtom } from 'jotai'
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { WorkPost } from './pages/WorkPost';
import { WorkResult } from './pages/WorkResult';
import { Work } from './pages/Work';
// import { authAtom } from './atoms/authAtom';

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

// const isAuth = false;

export const themeAtom = atom(darkTheme);
// export const authAtom = atom(isAuth);

const App = () => {

  // const [isAuth] = useAtom(authAtom);

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
