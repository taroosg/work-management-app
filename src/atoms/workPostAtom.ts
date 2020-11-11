import { atom } from 'jotai'

export const workPostAtom = atom({
  student_id: '',
  work_number: '',
  work_url: '',
  review: false,
  comment: '',
});
