import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
import { navbar } from "../utils/navbar";


const Root = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Navigate to={'/home'} />}  />
      <Route element={<Navbar/>}></Route> 
      {
        navbar.map(({id,path,Element})=>{
          return(
            <Route key={id} path={path} element={Element} />
          )
        })
      }
    </Routes>
  );
};

export default Root;
