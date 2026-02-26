import React from "react";

export default function Hero(){
  return(
    <section className="text-center px-6 py-24 bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white">

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Build Modern UI Faster
      </h1>

      <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
        Responsive components designed for performance and scalability.
      </p>

      <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
        Get Started
      </button>

    </section>
  )
}