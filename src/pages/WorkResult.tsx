import React, { useEffect } from 'react';
import axios from 'axios';
import { useAtom } from 'jotai'
import { classAtom } from '../atoms/classAtom';
import { postResultAtom } from '../atoms/postResultAtom'
import { SelectClassList } from '../components/SelectClassList';
import { PageTitle } from '../components/PageTitle';
import { WorkResultTable } from '../components/WorkResultTable';

export const WorkResult = () => {

  return (
    <>
      <PageTitle
        text='提出状況確認ページ'
      />
      <WorkResultTable />
    </>
  )
}