import { atom } from 'jotai'
import { WorkPost } from '../type/datatype'

const workPostArray: WorkPost[] = [];

export const postResultAtom = atom(workPostArray);
