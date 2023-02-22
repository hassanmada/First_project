import React, { useEffect, useState } from "react";
import Cart from "./Components/cart";
import Navbar from "../../home/Navbar/Navbar";
// import Espece from "./Components/Espece";
// import Payement from "./Components/Payement";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Paniers = () => {
  const navi = useNavigate();
  const user = useSelector(user => user);
  useEffect(()=>{

    if(!user.isconnected){
    navi("/Authen");
    }
  })

  return (
    <React.Fragment>
      
        <Navbar></Navbar>
        <Cart/>
{/* 
      <div style={{marginTop:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Espece />
      <Payement/>
      </div> */}
    </React.Fragment>
  );
};

export default Paniers;