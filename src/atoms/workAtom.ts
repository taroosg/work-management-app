import { atom } from 'jotai'
import { ClassList, StudentList, WorkList } from '../type/datatype'

  const workArray: WorkList[] = [];

export const workAtom = atom({
  workNumberList: workArray,
  currentWorkNumber:'',
});
