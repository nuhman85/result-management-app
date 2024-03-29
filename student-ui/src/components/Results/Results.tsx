import React, { FC, useEffect, useState } from 'react';
import styles from './Results.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Interface } from 'readline';
import axios from 'axios';

interface ResultsProps {}

interface ResultProperties{
  id: number,
  studentId: number,
  courseId: number,
  grade: string,
  studentName: string,
  courseName: string
}


const Results: FC<ResultsProps> = () =>{
  const [result, setResult] = useState<ResultProperties[]>([])

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const fetchRepos = () => {axios.get('http://localhost:8080/result', {
  })
  .then(function (response) {
    console.log(response);
    setResult(response.data);
  })}

  useEffect(() => {
    fetchRepos()
  }, []) 
return (
  <div className={styles.Results} data-testid="Results">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">Student</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.courseName}
              </TableCell>
              <TableCell align="right">{row.studentName}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)
}

export default Results;
