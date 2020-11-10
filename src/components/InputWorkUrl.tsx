import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);



export const InputWorkUrl = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)

  const classes = useStyles(theme);

  const handleChangeUrl = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setWorkPost({ ...workPost, work_url: e.currentTarget.value })
  }

  return (
    <TextField
      required
      id="work_url"
      label="Url"
      variant="outlined"
      onChange={handleChangeUrl}
    />

  )
}