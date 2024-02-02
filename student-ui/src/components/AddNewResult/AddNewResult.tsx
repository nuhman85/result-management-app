import React, { FC, useEffect, useState } from 'react';
import styles from './AddNewResult.module.css';
import { TextField, FormControl, Button, Select, MenuItem } from "@mui/material";
import axios from 'axios';
import moment from "moment";

interface AddNewResultProps {}
interface CourseProperties{
  id: number,
  name: string
}
interface StudentsProperties{
  id: number,
  firstName: string,
  familyName: string,
  dateOfBirth: string,
  email: string
}

const AddNewResult: FC<AddNewResultProps> = () => {

  const [course, setCourse] = useState<CourseProperties[]>([])
  const [student, setStudent] = useState<StudentsProperties[]>([])
  const [studentId, setStudentId] = useState("")
  const [courseId, setCourseId] = useState("")
  const [grade, setGrade] = useState("")
  const [success, setSuccess] = useState(false)


  const fetchCourseRepos = () => {axios.get('http://localhost:8080/course', {
  })
  .then(function (response) {
    setCourse(response.data);
  })}

  const fetchStudentRepos = () => {axios.get('http://localhost:8080/student', {
  })
  .then(function (response) {
    console.log(response);
    setStudent(response.data);
  })}

  useEffect(() => {
    fetchCourseRepos()
    fetchStudentRepos()
  }, [])





  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    axios.post('http://localhost:8080/addresult', {
      courseId: courseId,
      studentId: studentId,
      grade: grade
    })
    .then(function (response) {
      console.log(response);
      setSuccess(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

return (
  <div className={styles.AddNewResult} data-testid="AddNewResult">
    {success ? <h2>New Result Added Successfully</h2> : <h2>Add New Result</h2>}
     <form autoComplete="off" onSubmit={handleSubmit}>
    <div> Course: <Select
    labelId="demo-simples-select-label"
    id="demo-simpler-select"
    onChange={e => setCourseId(e.target.value)}
    style={{ width: 500 }}
    value={courseId}
    label="Select Course">
      {course.map((row, index) => (<MenuItem value={row.id}>{row.name}</MenuItem>))}
  </Select></div><div>
     Student:<Select
    labelId="demo-simpled-select-label"
    id="demo-simples-select"
    value={studentId}
    onChange={e => setStudentId(e.target.value)}
    style={{ width: 500 }}
    label="Select Student">
      {student.map((row, index) => (<MenuItem value={row.id}>{row.firstName} {row.familyName}</MenuItem>))}
  </Select></div>
<div>
  Grade:<Select
    labelId="demo-simpler-select-label"
    id="demo-simpled-select"
    value={grade}
    style={{ width: 100 }}
    onChange={e => setGrade(e.target.value)}
    label="Select Grade">
      <MenuItem value={"A"}>A</MenuItem>
      <MenuItem value={"A"}>B</MenuItem>
      <MenuItem value={"A"}>C</MenuItem>
      <MenuItem value={"A"}>D</MenuItem>
  </Select></div>
  <Button variant="outlined" color="secondary" type="submit">Submit</Button>
  </form>
  </div>
);


}




export default AddNewResult;
