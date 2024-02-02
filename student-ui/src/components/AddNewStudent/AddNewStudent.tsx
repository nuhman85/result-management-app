import React, { FC, useState } from 'react';
import styles from './AddNewStudent.module.css';
import { TextField, FormControl, Button } from "@mui/material";


interface Student {
  name: string ;
  marks: number ;
}
function AddNewStudent(){
  const [message, setMessage] = useState("") // type is string

  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
 
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
 
        setEmailError(false)
        setPasswordError(false)
 
        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
 
        if (email && password) {
            console.log(email, password)
        }
    }

  const updateMessage=()=>{
      setMessage("w3schoolsio") 
  }
  return (
      <>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Add New Student</h2>
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
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
      </>
  );
};

export default AddNewStudent;
