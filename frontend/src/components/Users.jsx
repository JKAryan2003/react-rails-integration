import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Users = () => {
  const url = "http://127.0.0.1:3000/api/v1/users"
  const [users, setUsers] = useState()
  const token = localStorage.getItem('token')
  console.log(token)

  const getData = async () => {
    try {
      const response = await axios.get(url,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUsers(response.data)
    }
    catch(error) {
      if (error.response && error.response.data && error.response.data.errors) {
        alert(error.response.data.errors)
      } else {
        console.log(error)
        alert("An error occured. Try again")
      }    
    }
  }

  console.log(users)

  useEffect(() => {
    getData()
  }, [])
  
  
  return (
    <>
       {users.map((user) => 
      <li>{user.username}</li>  
    )}
    </>
   
  )
}

export default Users