import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../api/api"
import React from "react"


const Create = () => {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await API.post("/users", { name })
    navigate("/")
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  )
}

export default Create
