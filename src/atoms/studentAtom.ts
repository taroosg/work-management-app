import { atom } from 'jotai'
import { StudentList } from '../type/datatype'

const studentArray: StudentList[] = [];

export const studentAtom = atom({
  studentList: studentArray,
  currentStudentId:'',
});
