import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem, TextField, Checkbox } from '@material-ui/core';
import { ClassList, StudentList, WorkList } from '../type/datatype'
import { workPostAtom } from '../atoms/workPostAtom'
import { useAtom } from 'jotai'
import { SelectClassList } from '../components/SelectClassList';
import { SelectStudentList } from '../components/SelectStudentList';
import { SelectWorkList } from '../components/SelectWorkList';
import { InputWorkUrl } from '../components/InputWorkUrl';
import { CheckReview } from '../components/CheckReview';
import { InputComment } from '../components/InputComment';

export const WorkPost = () => {
  const [workPost, setWorkPost] = useAtom(workPostAtom)

  const classArray: ClassList[] = [];
  const [classList, setClassList] = useState(classArray);
  const [currentClass, setCurrentClass] = useState('');
  const studentArray: StudentList[] = [];
  const [students, setStudents] = useState(studentArray);
  const [currentStudentId, setCurrentStudentId] = useState('');
  const workArray: WorkList[] = [];
  const [workNumberList, setWorkNumberList] = useState(workArray);
  const [currentWorkNumber, setCurrentWorkNumber] = useState('');
  const [workUrl, setWorkUrl] = useState('');
  const [review, setReview] = useState(true);
  const [comment, setComment] = useState('');

  const getStudentsByClass = async (class_id: string) => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/student/${class_id}`);
    setStudents(result.data);
  }

  const getClassList = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/class`);
    setClassList(result.data);
  }

  const getWorkList = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/work`);
    setWorkNumberList(result.data);
  }

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentClass(e.currentTarget.value);
    getStudentsByClass(e.currentTarget.value);
  };

  const handleChangeSelectStudent = (e: React.ChangeEvent<{ value: unknown }>): void => {
    setCurrentStudentId(e.target.value as string);
  };

  const handleChangeSelectWork = (e: React.ChangeEvent<{ value: unknown }>): void => {
    setCurrentWorkNumber(e.target.value as string);
  };

  const handleChangeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReview(e.target.checked);
  };

  const handleChangeUrl = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setWorkUrl(e.currentTarget.value)
  }

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setComment(e.currentTarget.value)
  }

  useEffect(() => {
    getClassList();
    getWorkList();
  }, [])

  const postToServer = () => {

  }

  return (
    <>
      <p>workPost page</p>
      <SelectClassList />
      <SelectStudentList />
      <SelectWorkList />
      <InputWorkUrl />
      <CheckReview />
      <InputComment />
      {JSON.stringify(workPost)}

      {/* <FormControl component="fieldset">
        <FormLabel component="legend">Class</FormLabel>
        <RadioGroup
          aria-label="class"
          name="class_select"
          value={currentClass}
          onChange={handleChangeRadio}
        >
          {
            classList.map((x, i) =>
              <FormControlLabel
                key={i}
                checked={currentClass === x.class_id.toString()}
                value={x.class_id}
                control={<Radio />}
                label={x.class_name}
              />
            )
          }
        </RadioGroup>
      </FormControl>
      {
        currentClass === ''
          ? ''
          : <FormControl variant="outlined" >
            <InputLabel id="student_number">StudentNumber</InputLabel>
            <Select
              labelId="student_number"
              value={currentStudentId}
              onChange={handleChangeSelectStudent}
              label="StudentNumber"
            >
              {
                students.map((x, i) =>
                  <MenuItem
                    key={i}
                    value={x.student_id}
                  >{x.student_number}</MenuItem>
                )
              }
            </Select>
          </FormControl>
      }
      {
        <FormControl variant="outlined" >
          <InputLabel id="work_number">WorkNumber</InputLabel>
          <Select
            labelId="work_number"
            value={currentWorkNumber}
            onChange={handleChangeSelectWork}
            label="WorkNumber"
          >
            {
              workNumberList.map((x, i) =>
                <MenuItem
                  key={i}
                  value={x.work_id}
                >{x.work_number}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      }
      <TextField
        required
        id="work_url"
        label="Url"
        variant="outlined"
        onChange={handleChangeUrl}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={review}
            onChange={handleChangeReview}
            name="review"
          />
        }
        label="Review"
      />
      <TextField
        required
        id="comment"
        label="Comment"
        variant="outlined"
        onChange={handleChangeComment}
      />
      <p>{students.find(x => x.student_id === currentStudentId)?.student_name}</p> */}
      {/* <p>{JSON.stringify(workPostAtom)}</p> */}
      {/* <p>{JSON.stringify(currentClass)}</p>
      <p>{JSON.stringify(classList)}</p>
      <p>{JSON.stringify(currentStudentId)}</p>
      <p>{JSON.stringify(students)}</p>
      <p>{JSON.stringify(currentWorkNumber)}</p>
      <p>{JSON.stringify(workNumberList)}</p>
      <p>{JSON.stringify(review)}</p>
      <p>{JSON.stringify(workUrl)}</p>
      <p>{JSON.stringify(comment)}</p> */}
    </>
  )
}