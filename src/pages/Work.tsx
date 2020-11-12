import React from 'react';
import { useAtom } from 'jotai'
import { BrowserRouter, Route } from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import { LoginForm } from '../components/LoginForm';
import { Nav } from '../components/Nav';
import { Home } from '../pages/Home';
import { WorkPost } from '../pages/WorkPost';
import { WorkResult } from '../pages/WorkResult';
import { authAtom } from '../atoms/authAtom';
import { loadingAtom } from '../atoms/loadingAtom';

export const Work = () => {

  const [isAuth] = useAtom(authAtom);
  const [isLoading] = useAtom(loadingAtom);

  return (
    <>
      {
        !isAuth
          ? <LoginForm />
          : <BrowserRouter>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/work-post' component={WorkPost} />
            <Route path='/work-result' component={WorkResult} />
          </BrowserRouter>
      }
      <Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >now loading...</Dialog>
    </>
  );
}

