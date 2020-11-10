import { atom } from 'jotai'
import { WorkList } from '../type/datatype'

const workArray: WorkList[] = [];

export const workAtom = atom({
  workNumberList: workArray,
  currentWorkNumber:'',
});
