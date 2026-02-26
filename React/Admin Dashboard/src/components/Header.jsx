import React from "react";

export default function Header() {
  return(
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <h2 className="font-semibold">Admin Dashboard</h2>
      <span className="text-gray-500">Welcome back 👋</span>
    </header>
  )
}