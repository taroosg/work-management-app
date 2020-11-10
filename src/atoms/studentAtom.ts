import { atom } from 'jotai'
import { ClassList, StudentList, WorkList } from '../type/datatype'

  const studentArray: StudentList[] = [];

export const studentAtom = atom({
  studentList: studentArray,
  currentStudentId:'',
});
