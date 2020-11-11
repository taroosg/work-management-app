import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import axios from 'axios';
import { useAtom } from 'jotai'
import { classAtom } from '../atoms/classAtom';
import { postResultAtom } from '../atoms/postResultAtom'
import { SelectClassList } from '../components/SelectClassList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // width: '80%',
    },
    container: {
      maxHeight: 440,
    },
  })
);

export const WorkResultTable = () => {

  const classes = useStyles();

  const [classData] = useAtom(classAtom);
  const [postResultData, setPostResultData] = useAtom(postResultAtom);

  const getPostDataByClass = async (class_id: string) => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URI}/work-post/${class_id}`);
    console.log(result.data)
    if (class_id === '') return false;
    setPostResultData(result.data);
  }

  useEffect(() => {
    getPostDataByClass(classData.currentClassId);
  }, [classData.currentClassId])

  type Column = {
    id: 'student_number' | 'work_number' | 'reviewEmoji' | 'work_url';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: 'student_number', label: '受講No.', align: 'right', minWidth: 10 },
    { id: 'work_number', label: '課題No.', align: 'right', minWidth: 10 },
    { id: 'reviewEmoji', label: 'レビュー', align: 'center', minWidth: 10 },
    { id: 'work_url', label: 'URL', align: 'center', minWidth: 10 },
    // { id: 'comment', label: 'comment', minWidth: 10 },
  ];

  type Data = {
    student_number: number;
    work_number: number;
    reviewEmoji: string;
    work_url: string;
    // comment: string;
  }

  const createData = (
    student_number: number,
    work_number: number,
    review: boolean,
    work_url: string,
  ): Data => {
    const reviewEmoji = !review ? '' : '✅';
    return { student_number, work_number, reviewEmoji, work_url };
  }

  const rows = postResultData.map(x => createData(x.student_id.student_number, x.work_number, x.review, x.work_url));

  return (
    <>
      <SelectClassList />
      {
        classData.currentClassId === ''
          ? ''
          : <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {
                                column.id !== 'work_url'
                                  ? value
                                  : typeof value !== 'string'
                                    ? ''
                                    : <a href={value} target="_blank" rel="noreferrer">⭐</a>
                              }
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
      }
    </>
  )
}