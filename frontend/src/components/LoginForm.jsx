import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Box, Button, Typography, TextField} from "@mui/material"


const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const url = "http://127.0.0.1:3000/api/v1/users"

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = (name, email, password) => {
    const input = {
      user: {
        username: name,
        email: email,
        password: password,
        token: localStorage.token
      }
    }
    console.log(input);
    axios.post(url, input).then((response) => {
      console.log(response.status, response.data);
    });

  }

  return (
    <div>
       <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={"center"} justifyContent={"center"} margin={"auto"} marginTop={5}>
          <Typography variant='h3'>Log In</Typography>
          <TextField type={"email"} value={email} placeholder='Email' margin='normal' onChange={handleEmail}></TextField>
          <TextField type={"password"} value={password} placeholder='Password' margin='normal' onChange={handlePassword}></TextField>
          <Button variant='contained' margin='normal' onClick={() => handleSubmit(email, password)}>Log In</Button>
        </Box>
    </div>
  )
}

export default LoginForm