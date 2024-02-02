import React, { FC, useEffect, useState } from 'react';
import styles from './Students.module.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface StudentsProps {}

interface StudentsProperties{
  id: number,
  firstName: string,
  familyName: string,
  dateOfBirth: string,
  email: string
}

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  

const Students: FC<StudentsProps> = () => {
  const [student, setStudent] = useState<StudentsProperties[]>([])

  const fetchRepos = () => {axios.get('http://localhost:8080/student', {
  })
  .then(function (response) {
    console.log(response);
    setStudent(response.data);
  })}

  useEffect(() => {
    fetchRepos()
  }, []) 


  const handleRemove =(id: number) =>{
    axios
       .delete(`http://localhost:8080/student/${id}`)
       .then(res => {
        console.log('deleted',res)
        const newPeople = student.filter((person) => person.id !== id);
 
    setStudent( newPeople);
    
       })
       .catch(error =>{
        console.log(error)
       })
    }

  return (
    <div className={styles.Students} data-testid="Students">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name & Family Name</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {student.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName} {row.familyName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.dateOfBirth.replaceAll("-","/")}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right" onClick={() => handleRemove(row.id)}><img src="delete.png"></img></TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )

} 

export default Students;
