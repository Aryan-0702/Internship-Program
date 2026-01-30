import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import API from "../api/api"
import React from "react"


const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await API.get("/users")
    setUsers(res.data)
  }

  const deleteUser = async (id) => {
    await API.delete(`/users/${id}`)
    fetchUsers()
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {users.map(user => (
        <div
          key={user.id}
          className="bg-white p-3 mb-2 flex justify-between rounded shadow"
        >
          <span>{user.name}</span>
          <div className="space-x-2">
            <Link
              to={`/edit/${user.id}`}
              className="bg-yellow-400 px-3 py-1 rounded"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
