import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { loadingAtom } from '../atoms/loadingAtom';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .Button-root': {
        margin: theme.spacing(2),
        width: '20ch',
      },
    },
  })
);

export const SubmitButton = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [isLoading, setIsLoading] = useAtom(loadingAtom)

  const classes = useStyles(theme);

  const sendPostToAPI = async () => {
    if (workPost.student_id === '' || workPost.work_number === '' || workPost.work_url === '') {
      alert('未入力項目があります！');
      return false;
    };
    setIsLoading(true);
    const result = await axios.post(`${process.env.REACT_APP_SERVER_URI}/work-post`, workPost);
    if (result.status === 201) alert('Success!!!')
    setWorkPost({ student_id: '', work_number: '', work_url: '', review: true, comment: '' })
    setIsLoading(false);
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
        className="Button-root"
        onClick={handleSubmit}
      >
        送信
      </Button>
    </div>
  )
}