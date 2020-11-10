import React, { useEffect } from 'react';
import axios from 'axios';

export const WorkResult = () => {
  const getPostData = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/work-post`);
    console.log(result.data)
  }

  useEffect(() => {
    getPostData();
  }, [])

  return (
    <>
      <p>workResult page</p>
    </>
  )
}