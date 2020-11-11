import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { workPostAtom } from '../atoms/workPostAtom';
import { classAtom } from '../atoms/classAtom';
import { studentAtom } from '../atoms/studentAtom';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';

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
      '& .Typography-root': {
        marginTop: theme.spacing(2),
      }
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
  };

  return (
    classData.currentClassId === ''
      ? null
      : <div className={classes.root}>
        <FormControl variant="outlined" className="FormControl-root">
          <InputLabel id="student_number">受講生番号</InputLabel>
          <Select
            labelId="student_number"
            value={workPost.student_id}
            onChange={handleChangeSelectStudent}
            label="StudentNumber"
            className="Select-root"
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
          <Typography className="Typography-root">{studentData.studentList.find(x => x.student_id === workPost.student_id)?.student_name ?? '受講生氏名'}</Typography>
        </FormControl>
      </div>
  )
}