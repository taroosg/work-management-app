import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App';
import { authAtom } from '../atoms/authAtom';
import { loadingAtom } from '../atoms/loadingAtom';
import { InputBase, IconButton, Paper } from '@material-ui/core';
import axios from 'axios';

import { ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    input: {
      margin: theme.spacing(2),
      width: '25ch',
    },
    iconButton: {
      marginRight: theme.spacing(1),
    },
  })
);

export const LoginForm = () => {

  const [theme] = useAtom(themeAtom)
  const [, setIsAuth] = useAtom(authAtom);
  const [, setIsLoading] = useAtom(loadingAtom)

  const [password, setPassword] = useState('');

  const classes = useStyles(theme);

  const authRequest = async (password: string) => {
    setIsLoading(true);
    const authResult = await axios.post(`${process.env.REACT_APP_SERVER_URI}/auth`, { password: password });
    if (authResult.data === true) {
      setIsAuth(true);
      setIsLoading(false);
    }
    else {
      alert('invailed password...');
      setIsLoading(false);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    authRequest(password);
  };

  return (
    <div className={classes.root}>
      <Paper
        component="form"
        variant="outlined"
        onSubmit={handleSubmit}
      >
        <InputBase
          className={classes.input}
          type="password"
          placeholder="Password"
          inputProps={{ 'aria-label': 'Password' }}
          id="password"
          onChange={handleChangePassword}
        />
        <IconButton
          type="button"
          color="primary"
          className={classes.iconButton}
          aria-label="submit"
        >
          <ChevronRight />
        </IconButton>
      </Paper>
    </div>
  )
}