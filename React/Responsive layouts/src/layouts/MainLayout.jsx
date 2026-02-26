import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({children}){
  return(
    <div className="bg-slate-50 min-h-screen flex flex-col">

      <Navbar/>

      <main className="flex-1">
        {children}
      </main>

      <Footer/>

    </div>
  )
}