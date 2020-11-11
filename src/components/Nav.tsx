import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Breadcrumbs, Dialog } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { loadingAtom } from '../atoms/loadingAtom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: '5ch',
      margin: theme.spacing(2),
    },
  })
);

export const Nav = () => {
  const [theme] = useAtom(themeAtom)
  const [isLoading] = useAtom(loadingAtom);

  const classes = useStyles(theme);

  return (
    <div>
      <Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >now loading...</Dialog>
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
    </div>
  );
}
