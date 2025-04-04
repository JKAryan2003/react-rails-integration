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
  
  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default MainPage