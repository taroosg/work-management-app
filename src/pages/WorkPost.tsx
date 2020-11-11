import React from 'react';
import { workPostAtom } from '../atoms/workPostAtom'
import { useAtom } from 'jotai'
import { SelectClassList } from '../components/SelectClassList';
import { SelectStudentList } from '../components/SelectStudentList';
import { SelectWorkList } from '../components/SelectWorkList';
import { InputWorkUrl } from '../components/InputWorkUrl';
import { CheckReview } from '../components/CheckReview';
import { InputComment } from '../components/InputComment';
import { SubmitButton } from '../components/SubmitButton';

export const WorkPost = () => {

  const [workPost] = useAtom(workPostAtom)

  return (
    <>
      <p>workPost page</p>
      <SelectClassList />
      <SelectStudentList />
      <SelectWorkList />
      <InputWorkUrl />
      <CheckReview />
      <InputComment />
      <SubmitButton />
      {/* {JSON.stringify(workPost)} */}
    </>
  )
}