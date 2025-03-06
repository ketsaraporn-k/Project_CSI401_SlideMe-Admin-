import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function Layout({slide,handleSlide,setToken,setRole,token}) {
  return (
    <div className="app">
      <Navbar slide={slide} setToken={setToken} setRole={setRole} token={token}/>
      <div className="main-content">
        <Header handleSlide={handleSlide} />
        <div className="content-area">
            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
