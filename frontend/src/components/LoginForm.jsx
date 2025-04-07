import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Box, Button, Typography, TextField} from "@mui/material"
import { useNavigate } from 'react-router-dom'

const LoginForm = ({token, setToken}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const url = "http://127.0.0.1:3000/api/v1/sessions"

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (email, password) => {
    try {
      const input = {
        user: {
          email: email,
          password: password
        }
      }
      const response = await axios.post(url, input)
      console.log(response.data)
      if (response.data)
      {
        localStorage.setItem("token", response.data.token)
        setToken(localStorage.getItem('token'))
        alert("Login Success")
        console.log(token)
        navigate('/users')
      }
      setEmail("")
      setPassword("")
      
    }
    catch(error) {
      if (error.response && error.response.data && error.response.data.errors) {
        alert(error.response.data.errors)
      } else {
        alert("An error occured. Try again")
      }    
    }
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