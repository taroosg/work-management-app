import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { workAtom } from '../atoms/workAtom';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .FormControl-root': {
        margin: theme.spacing(2),
        width: '35ch',
      },
    },
  })
);

export const SelectWorkList = () => {
  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [workData, setWorkData] = useAtom(workAtom)

  const classes = useStyles(theme);

  const getWorkList = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/work`);
    setWorkData({ ...workData, workNumberList: result.data });
  }

  const handleChangeSelectWork = (e: React.ChangeEvent<{ value: unknown }>): void => {
    setWorkData({ ...workData, currentWorkNumber: e.target.value as string });
    setWorkPost({ ...workPost, work_number: e.target.value as string });
  };

  useEffect(() => {
    getWorkList();
  }, []);

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className="FormControl-root" >
        <InputLabel id="work_number">課題番号</InputLabel>
        <Select
          labelId="work_number"
          value={workPost.work_number}
          onChange={handleChangeSelectWork}
          label="WorkNumber"
          className="Select-root"
        >
          {
            workData.workNumberList.map((x, i) =>
              <MenuItem
                key={i}
                value={x.work_number}
              >{x.work_number}</MenuItem>
            )
          }
        </Select>
      </FormControl>
    </div>
  )
}