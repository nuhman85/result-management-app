import React, { FC, useEffect, useState } from 'react';
import styles from './Courses.module.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface CoursesProps {}
interface CourseProperties{
  id: number,
  name: string
}
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const Courses: FC<CoursesProps> = () =>{
  const [course, setCourse] = useState<CourseProperties[]>([])
  const fetchRepos = () => {axios.get('http://localhost:8080/course', {
  })
  .then(function (response) {
    console.log(response);
    setCourse(response.data);
  })}

  useEffect(() => {
    fetchRepos()
  }, [])

  const handleRemove =(id: number) =>{
    axios
       .delete(`http://localhost:8080/course/${id}`)
       .then(res => {
        console.log('deleted',res)
        const newPeople = course.filter((person) => person.id !== id);
 
    setCourse( newPeople);
    
       })
       .catch(error =>{
        console.log(error)
       })
    }

return (
  <div className={styles.Courses} data-testid="Courses">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {course.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
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

export default Courses;
