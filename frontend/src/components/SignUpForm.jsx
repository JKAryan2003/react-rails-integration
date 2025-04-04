import React from 'react'
import {Box, Button, Typography, TextField} from "@mui/material"
import { useState } from 'react'

const SignUpForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (name, email, password) => {
    console.log("I am clicked");
    setInputs({
      name: name,
      email: email,
      password: password
    })
    console.log(inputs);
  }

  return (
    <div>
        <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={"center"} justifyContent={"center"} margin={"auto"} marginTop={5}>
          <Typography variant='h3'>Sign Up</Typography>
          <TextField type={"text"} value={name} placeholder='Name' margin='normal' onChange={handleName}></TextField>
          <TextField type={"text"} value={email} placeholder='Email' margin='normal' onChange={handleEmail}></TextField>
          <TextField type={"text"} value={password} placeholder='Password' margin='normal' onChange={handlePassword}></TextField>
          <Button variant='contained' margin='normal' onClick={handleSubmit}>Sign Up</Button>
        </Box>
    </div>
  )
}

export default SignUpForm