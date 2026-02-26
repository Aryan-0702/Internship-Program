import React from "react";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import CardGrid from "./sections/CardGrid";

export default function App(){
  return(
    <MainLayout>
      <Hero/>
      <CardGrid/>
    </MainLayout>
  )
}