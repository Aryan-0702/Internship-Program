import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Edit from "./pages/Edit"

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

