import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Breadcrumbs } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: '5ch'
    },
  })
);

export const Nav = () => {
  const [theme] = useAtom(themeAtom)

  const classes = useStyles(theme);

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href="/WorkPost" >
        課題提出
      </Link>
      <Link color="inherit" href="/WorkResult" >
        提出状況確認
      </Link>
    </Breadcrumbs>
  );
}
