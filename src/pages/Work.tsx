import React from 'react';
import { useAtom } from 'jotai'
import { BrowserRouter, Route } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { Nav } from '../components/Nav';
import { Home } from '../pages/Home';
import { WorkPost } from '../pages/WorkPost';
import { WorkResult } from '../pages/WorkResult';
import { authAtom } from '../atoms/authAtom';

export const Work = () => {

  const [isAuth] = useAtom(authAtom);

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
    </>
  );
}

