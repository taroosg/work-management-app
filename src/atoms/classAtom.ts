import { atom } from 'jotai'
import { ClassList, StudentList, WorkList } from '../type/datatype'

const classListArray: ClassList[] = [];
export const classAtom = atom({
  classList: classListArray,
  currentClassId:'',
});
