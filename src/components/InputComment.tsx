import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { TextField, } from '@material-ui/core';

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



export const InputComment = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)

  const classes = useStyles(theme);

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setWorkPost({ ...workPost, comment: e.currentTarget.value })
  }

  return (
    <TextField
      id="comment"
      label="Comment"
      variant="outlined"
      onChange={handleChangeComment}
    />
  )
}