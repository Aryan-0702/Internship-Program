import { Link } from "react-router-dom"
import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-xl">CRUD App</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  )
}

export default Navbar
