import React from 'react';
import { PageTitle } from '../components/PageTitle';
import { SelectClassList } from '../components/SelectClassList';
import { SelectStudentList } from '../components/SelectStudentList';
import { SelectWorkList } from '../components/SelectWorkList';
import { InputWorkUrl } from '../components/InputWorkUrl';
import { CheckReview } from '../components/CheckReview';
import { InputComment } from '../components/InputComment';
import { SubmitButton } from '../components/SubmitButton';

export const WorkPost = () => {
  return (
    <>
      <PageTitle
        text='課題提出ページ'
      />
      <SelectClassList />
      <SelectStudentList />
      <SelectWorkList />
      <InputWorkUrl />
      <CheckReview />
      <InputComment />
      <SubmitButton />
    </>
  )
}