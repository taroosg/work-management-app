import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .TextField-root': {
        margin: theme.spacing(2),
        width: '20ch',
      },
    },
  })
);

type titleProps = {
  text: string,
}

export const PageTitle = ({ text }: titleProps) => {

  const [theme] = useAtom(themeAtom)

  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Typography>
        {text}
      </Typography>
    </div>
  )
}