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



export const InputComment = () => {

  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [workData, setWorkData] = useAtom(workAtom)
  const [classData, setClassData] = useAtom(classAtom)
  const [studentData, setStudentData] = useAtom(studentAtom)

  // const [classList, setClassList] = useState([]);

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