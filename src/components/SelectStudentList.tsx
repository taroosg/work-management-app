import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { classAtom } from '../atoms/classAtom';
import { studentAtom } from '../atoms/studentAtom';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


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

export const SelectStudentList = () => {
  const [theme] = useAtom(themeAtom)
  const [workPost, setWorkPost] = useAtom(workPostAtom)
  const [classData] = useAtom(classAtom)
  const [studentData, setStudentData] = useAtom(studentAtom)

  const classes = useStyles(theme);

  const handleChangeSelectStudent = (e: React.ChangeEvent<{ value: unknown }>): void => {
    setStudentData({ ...studentData, currentStudentId: e.target.value as string });
    setWorkPost({ ...workPost, student_id: e.target.value as string });
    console.log(workPost);
  };

  return (
    classData.currentClassId === ''
      ? null
      : <FormControl variant="outlined" >
        <InputLabel id="student_number">StudentNumber</InputLabel>
        <Select
          labelId="student_number"
          value={studentData.currentStudentId}
          onChange={handleChangeSelectStudent}
          label="StudentNumber"
        >
          {
            studentData.studentList.map((x, i) =>
              <MenuItem
                key={i}
                value={x.student_id}
              >{x.student_number}</MenuItem>
            )
          }
        </Select>
        <p>{studentData.studentList.find(x => x.student_id === studentData.currentStudentId)?.student_name}</p>
      </FormControl>
  )
}