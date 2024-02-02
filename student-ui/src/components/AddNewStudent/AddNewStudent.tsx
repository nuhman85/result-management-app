import React, { FC, useState } from 'react';
import styles from './AddNewStudent.module.css';
import { TextField, FormControl, Button } from "@mui/material";
import axios from 'axios';
import moment from "moment";


interface Student {
  name: string ;
  marks: number ;
}
function AddNewStudent(){
  const [message, setMessage] = useState("") // type is string
  const [firstName, setFirstName] = useState("")
  const [familyName, setFamilyName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
 
        setEmailError(false)
    
 
        if (email == '') {
            setEmailError(true)
        }

        if (email == '') {
          setEmailError(true)
      }
    
 
        if (email) {
            console.log(email)
        }

let formattedDate = moment(dateOfBirth).format("MM-DD-YYYY");

var years = moment().diff(formattedDate, 'years');
console.log(years);

if(years>=10){

  
}else{
  setDateOfBirth(" ");
  return;
}

        axios.post('http://localhost:8080/addstudent', {
          firstName: firstName,
          familyName: familyName,
          dateOfBirth: formattedDate,
          email: email
        })
        .then(function (response) {
          console.log(response);
          setSuccess(true)
          setFirstName("")
          setFamilyName("")
          setDateOfBirth("")
          setEmail("");

        })
        .catch(function (error) {
          console.log(error);
        });
    }

  const updateMessage=()=>{
      setMessage("w3schoolsio") 
  }
  return (
    <>
          <form autoComplete="off" onSubmit={handleSubmit}>
          {success ? <h2>New Student Added Successfully</h2> : <h2>Add New Student</h2>}
        
            <TextField 
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    value={firstName}
                    fullWidth
                 />
                  <TextField 
                    label="Family Name"
                    onChange={e => setFamilyName(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="text"
                    sx={{mb: 3}}
                    value={familyName}
                    fullWidth
                 />
                  <TextField 
                    label="DOB"
                    onChange={e => setDateOfBirth(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="date"
                    sx={{mb: 3}}
                    error={moment().diff(dateOfBirth, 'years')<10}
                    value={dateOfBirth}
                    fullWidth
                 />
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>
             
        </form>
      </>
  );
};

export default AddNewStudent;
