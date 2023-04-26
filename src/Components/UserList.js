import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setusers(res.data))
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }, [])


  return (
    <div className='All'>
      {users?.map((user) => <UserCard user={user} />)}
    </div>
  )
}

export default UserList