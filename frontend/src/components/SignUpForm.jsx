import React from 'react'
import {Box, Button, Typography, TextField} from "@mui/material"

const SignUpForm = () => {
  return (
    <div>
      <form action="">
        <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={"center"} justifyContent={"center"} margin={"auto"} marginTop={5}>
          <Typography variant='h3'>Sign Up</Typography>
          <TextField type={"text"} placeholder='Name' margin='normal'></TextField>
          <TextField type={"text"} placeholder='Email' margin='normal'></TextField>
          <TextField type={"text"} placeholder='Password' margin='normal'></TextField>
          <Button variant='contained' margin='normal'>Sign Up</Button>
        </Box>
      </form>
    </div>
  )
}

export default SignUpForm