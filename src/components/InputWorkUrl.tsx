import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { TextField } from '@material-ui/core';
import { isMatchUrl } from './SubmitButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .TextField-root': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
  })
);

export const InputWorkUrl = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)

  const classes = useStyles(theme);

  const handleChangeUrl = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void | false => {
    setWorkPost({ ...workPost, work_url: e.currentTarget.value })
  }

  return (
    <div className={classes.root}>
      <TextField
        required
        type="url"
        id="work_url"
        label="Github_URL"
        error={workPost.work_url !== '' && !isMatchUrl(workPost.work_url)}
        helperText={
          !isMatchUrl(workPost.work_url)
            ? 'NOT a Github repository URL...'
            : '👍'
        }
        variant="outlined"
        onChange={handleChangeUrl}
        className="TextField-root"
      />
    </div>
  )
}