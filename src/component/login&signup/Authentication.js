import React, { useState } from "react";
import "./Authentication.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Navbar from "../home/Navbar/Navbar"

function Authentication() {
    const [slideStyle,setStyle]=useState("slide-right")
    const [buttonText,setbuttonText]=useState("Sign up")
    const slide= ()=>{
        setStyle("slide-left");
        setbuttonText("Login");
        if(slideStyle === "slide-left"){
            setStyle("slide-right");
            setbuttonText("Signup");
        }
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="contenairel">
        <div className="contentl">
          <div className="articlel">
            <Login></Login>
          </div>
          <div className="articlel">
            <Signup></Signup>
          </div>
          <div className={slideStyle}>
            <h1>WELCOME</h1>
            <p>To be able to take advantage of our offers, please signup now</p>
            <button onClick={slide}>{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Authentication;
