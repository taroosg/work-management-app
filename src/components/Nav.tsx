import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Breadcrumbs, Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom'
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
    '& .Link-root': {
      textDecoration: 'none',
      color: 'white',
    }
  })
);

export const Nav = () => {
  const [theme] = useAtom(themeAtom)
  // const [isLoading] = useAtom(loadingAtom);

  const classes = useStyles(theme);

  return (
    <div>
      {/* <Dialog
        open={isLoading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >now loading...</Dialog> */}
      <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
        <Link to="/" style={{ textDecoration: 'none', color: 'orange' }}>
          Home
        </Link>
        <Link color="primary" to="/work-post" style={{ textDecoration: 'none', color: 'orange' }}>
          課題提出
      </Link>
        <Link color="primary" to="/work-result" style={{ textDecoration: 'none', color: 'orange' }}>
          提出状況確認
      </Link>
      </Breadcrumbs>
    </div>
  );
}
