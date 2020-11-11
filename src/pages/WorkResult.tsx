import React, { useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai'
import { classAtom } from '../atoms/classAtom';
import { postResultAtom } from '../atoms/postResultAtom'
import { SelectClassList } from '../components/SelectClassList';
import { WorkResultTable } from '../components/WorkResultTable';

export const WorkResult = () => {

  // const [classData] = useAtom(classAtom);
  // const [postResultData, setPostResultData] = useAtom(postResultAtom);

  // const getPostDataByClass = async (class_id: string) => {
  //   const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/work-post/${class_id}`);
  //   console.log(result.data)
  //   setPostResultData(result.data);
  // }

  // useEffect(() => {
  //   getPostDataByClass(classData.currentClassId);
  // }, [classData.currentClassId])

  return (
    <>
      <p>workResult page</p>
      <WorkResultTable />
    </>
  )
}