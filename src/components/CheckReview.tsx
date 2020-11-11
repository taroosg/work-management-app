import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .CheckBox-root': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  })
);

export const CheckReview = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)

  const classes = useStyles(theme);

  const handleChangeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkPost({ ...workPost, review: e.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            checked={workPost.review}
            onChange={handleChangeReview}
            name="review"
          />
        }
        label="Review"
        className="CheckBox-root"
      />
    </div>
  )
}