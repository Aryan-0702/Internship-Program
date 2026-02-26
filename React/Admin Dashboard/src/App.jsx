import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";

const Dashboard = lazy(()=>import("./pages/Dashboard"));
const Users = lazy(()=>import("./pages/Users"));

export default function App(){
  return(
    <BrowserRouter>
      <Suspense fallback={<h1 className="p-10">Loading...</h1>}>
        <Routes>
          <Route element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}