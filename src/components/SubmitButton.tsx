import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .TextField-root': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
  })
);

export const SubmitButton = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost] = useAtom(workPostAtom)

  const classes = useStyles(theme);

  const sendPostToAPI = async () => {
    if (workPost.student_id === '' || workPost.work_number === '' || workPost.work_url === '') {
      alert('未入力項目があります！');
      return false;
    };
    const result = await axios.post(`${process.env.REACT_APP_SERVER_URI}/work-post`, workPost);
    // console.log(result);
    if (result.status === 201) alert('Success!!!')
  }

  const handleSubmit = () => {
    sendPostToAPI();
  }

  return (
    <div className={classes.root}>
      <Button
        id="submit"
        variant="contained"
        color="primary"
        className="TextField-root"
        onClick={handleSubmit}
      >
        Submit!
      </Button>
    </div>
  )
}