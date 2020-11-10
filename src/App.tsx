import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import * as colors from "@material-ui/core/colors";
import { atom, Provider } from 'jotai'
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './components/Nav'
import { Home } from './pages/Home'
import { WorkPost } from './pages/WorkPost';
import { WorkResult } from './pages/WorkResult';

const darkTheme = createMuiTheme({
  typography: {
    fontSize: 22,
  },
  palette: {
    type: 'dark',
    primary: {
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
        <BrowserRouter>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/WorkPost' component={WorkPost} />
          <Route path='/WorkResult' component={WorkResult} />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>

  );
}

export default App;
