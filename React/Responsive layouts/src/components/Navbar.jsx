import React, { memo, useState } from "react";

function Navbar(){
  const [open,setOpen] = useState(false);

  return(
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-indigo-600">
          NovaUI
        </h1>

        {/* desktop */}
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <a className="hover:text-indigo-600 transition">Home</a>
          <a className="hover:text-indigo-600 transition">Features</a>
          <a className="hover:text-indigo-600 transition">Pricing</a>
        </div>

        {/* mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={()=>setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 font-medium text-slate-700">
          <a>Home</a>
          <a>Features</a>
          <a>Pricing</a>
        </div>
      )}
    </nav>
  )
}

export default memo(Navbar);