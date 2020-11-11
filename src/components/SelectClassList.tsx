import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { useAtom } from 'jotai';
import { themeAtom } from '../App'
import { classAtom } from '../atoms/classAtom';
import { studentAtom } from '../atoms/studentAtom';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

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

export const SelectClassList = () => {
  const [theme] = useAtom(themeAtom)
  const [classData, setClassData] = useAtom(classAtom)
  const [studentData, setStudentData] = useAtom(studentAtom)

  const classes = useStyles(theme);

  const getClassList = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/class`);
    setClassData({ ...classData, classList: result.data });
  }

  const getStudentsByClass = async (class_id: string) => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/student/${class_id}`);
    setStudentData({ ...studentData, studentList: result.data });
  }

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setClassData({ ...classData, currentClassId: e.currentTarget.value });
    setStudentData({ ...studentData, currentStudentId: '' });
    getStudentsByClass(e.currentTarget.value);
  };

  useEffect(() => {
    getClassList();
  }, [])

  return (
    <div className={classes.root} >
      <FormControl component="fieldset">
        <FormLabel component="legend">Class</FormLabel>
        <RadioGroup
          aria-label="class"
          name="class_select"
          value={classData.currentClassId}
          onChange={handleChangeRadio}
        >
          {
            classData.classList.map((x, i) =>
              <FormControlLabel
                key={i}
                checked={classData.currentClassId === x.class_id.toString()}
                value={x.class_id}
                control={<Radio />}
                label={x.class_name}
              />
            )
          }
        </RadioGroup>
      </FormControl>
    </div>
  )
}