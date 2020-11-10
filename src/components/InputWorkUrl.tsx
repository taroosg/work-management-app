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



export const InputWorkUrl = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [workData, setWorkData] = useAtom(workAtom)
  const [classData, setClassData] = useAtom(classAtom)
  const [studentData, setStudentData] = useAtom(studentAtom)

  // const [classList, setClassList] = useState([]);

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