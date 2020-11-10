import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { classAtom } from '../atoms/classAtom';
import { studentAtom } from '../atoms/studentAtom';
import { workAtom } from '../atoms/workAtom';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem, TextField, Checkbox } from '@material-ui/core';
import { ClassList, StudentList, WorkList } from '../type/datatype'


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

export const SelectWorkList = () => {
  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [workData, setWorkData] = useAtom(workAtom)
  const [classData, setClassData] = useAtom(classAtom)
  const [studentData, setStudentData] = useAtom(studentAtom)

  // const [classList, setClassList] = useState([]);

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
  }, [])

  return (
    <FormControl variant="outlined" >
      <InputLabel id="work_number">WorkNumber</InputLabel>
      <Select
        labelId="work_number"
        value={workData.currentWorkNumber}
        onChange={handleChangeSelectWork}
        label="WorkNumber"
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
  )
}