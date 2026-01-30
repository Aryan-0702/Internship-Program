import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import API from "../api/api"
import React from "react"

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState("")

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    const res = await API.get(`/users/${id}`)
    setName(res.data.name)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    await API.put(`/users/${id}`, { name })
    navigate("/")
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  )
}

export default Edit
