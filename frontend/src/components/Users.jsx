import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Users = () => {
  const url = "http://127.0.0.1:3000/api/v1/users"
  const [users, setUsers] = useState([])

  const getData = async () => {
    await axios.get(url)
    .then((response) => {
      setUsers(response.data)
    }
    )
  }
  console.log(users);
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {users.map((user) => 
        <p>{user.username}</p>
      )}
    </div>
  )
}

export default Users