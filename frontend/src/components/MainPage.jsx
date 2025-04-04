import React from 'react'
import SignUpForm from './SignUpForm'
import axios from 'axios'
import { useEffect } from 'react'

const MainPage = () => {

  const url = "http://127.0.0.1:3000/api/v1/users"

  const getData = async () => {
    await axios.get(url)
    .then(response => console.log(response)
    )
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (name, email, password) => {
    const input = {
      user: {
        username: name,
        email: email,
        password: password
      }
    }
    console.log(input);
    axios.post(url, input).then((response) => {
      console.log(response.status, response.data);
    });

  }
  
  return (
    <div>
      <SignUpForm handleSubmit={handleSubmit}/>
    </div>
  )
}

export default MainPage