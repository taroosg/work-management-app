import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { GitHub, DoneOutline } from '@material-ui/icons';
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
      justifyContent: 'center',
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
    if (class_id === '') return false;
    setPostResultData(result.data);
  }

  useEffect(() => {
    getPostDataByClass(classData.currentClassId);
  }, [classData.currentClassId])

  type Column = {
    id: 'student_number' | 'work_number' | 'work_url' | 'review';
    label: string;
    minWidth?: number;
    maxWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: 'work_number', label: '課題No.', align: 'right', minWidth: 10, maxWidth: 100 },
    { id: 'student_number', label: '受講No.', align: 'right', minWidth: 10, maxWidth: 100 },
    { id: 'work_url', label: 'URL', align: 'center', minWidth: 10, maxWidth: 100 },
    { id: 'review', label: 'レビュー', align: 'center', minWidth: 10, maxWidth: 100 },
  ];

  type Data = {
    work_number: number;
    student_number: number;
    work_url: string;
    review: boolean;
  }

  const createData = (
    work_number: number,
    student_number: number,
    work_url: string,
    review: boolean,
  ): Data => {
    return { work_number, student_number, work_url, review };
  }

  const rows = postResultData.map(x => createData(x.work_number, x.student_id.student_number, x.work_url, x.review));

  return (
    <>
      <SelectClassList />
      {
        classData.currentClassId === ''
          ? ''
          : <div className={classes.root}>
            <Paper >
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
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
                                  (column.id !== 'review' && column.id !== 'work_url')
                                    ? value
                                    : typeof value === 'string'
                                      ? <a href={value} target="_blank" rel="noreferrer"><GitHub color="primary" /></a>
                                      : !value
                                        ? ''
                                        : <DoneOutline color="primary" />
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
          </div>
      }
    </>
  )
}