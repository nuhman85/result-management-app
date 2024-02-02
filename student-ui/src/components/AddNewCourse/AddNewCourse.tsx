import React, { FC, useState } from 'react';
import styles from './AddNewCourse.module.css';
import { TextField, FormControl, Button } from "@mui/material";
import axios from 'axios';

interface AddNewCourseProps {}

const AddNewCourse: FC<AddNewCourseProps> = () => {

  const [name, setName] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()

    axios.post('http://localhost:8080/addcourse', {
      name: name
    })
    .then(function (response) {
      console.log(response);
      setSuccess(true)
      setName("")
    

    })
    .catch(function (error) {
      console.log(error);
    });

  }

return (
  <div className={styles.AddNewCourse} data-testid="AddNewCourse">
     <form autoComplete="off" onSubmit={handleSubmit}>
          {success ? <h2>New Course Added Successfully</h2> : <h2>Add New Course</h2>}
        
            <TextField 
                    label="Course Name"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    value={name}
                    fullWidth
                 />
             
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
             
        </form>
  </div>
)

};

export default AddNewCourse;
