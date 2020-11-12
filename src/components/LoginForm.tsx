import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App';
import { authAtom } from '../atoms/authAtom';
import { loadingAtom } from '../atoms/loadingAtom';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      '& .TextField-root': {
        margin: theme.spacing(2),
        width: '35ch',
      },
      '& .Button-root': {
        margin: theme.spacing(2),
        width: '20ch',
      },
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

  const handleSubmit = () => {
    authRequest(password);
  };

  return (
    <div className={classes.root}>
      <TextField
        type="password"
        id="password"
        label="password"
        variant="outlined"
        onChange={handleChangePassword}
        className="TextField-root"
      />
      <Button
        id="submit"
        variant="contained"
        color="primary"
        className="Button-root"
        onClick={handleSubmit}
      >
        Sign In!
      </Button>
    </div>
  )
}