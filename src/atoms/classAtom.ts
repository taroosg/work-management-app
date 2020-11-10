import { atom } from 'jotai'
import { ClassList } from '../type/datatype'

const classListArray: ClassList[] = [];
export const classAtom = atom({
  classList: classListArray,
  currentClassId:'',
});
