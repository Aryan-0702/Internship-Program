import { NavLink } from "react-router-dom";
import { memo } from "react";
import React from "react";

function Sidebar(){
  return(
    <aside className="w-60 bg-slate-900 text-white p-5">
      <h1 className="text-xl font-bold mb-6">Admin</h1>

      <nav className="space-y-3">
        <NavLink to="/" className="block hover:text-cyan-400">Dashboard</NavLink>
        <NavLink to="/users" className="block hover:text-cyan-400">Users</NavLink>
      </nav>
    </aside>
  )
}

export default memo(Sidebar);