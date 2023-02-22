import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./Logo/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSortDown,
  faUserCircle,
  faSearch,
  faSignOut,
  faCartShopping,
  faSignIn
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/store";
import { useSelector, useStore } from "react-redux";
import Search from "../Search/Search"

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.log-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  const user = useSelector(user => user);
  const store = useStore();
  const navi = useNavigate();
  const out = () => {
    store.dispatch(logout());
  }
  const panier = () =>{
    
    if(user.isconnected){
      navi("/panier");
    }else{
      navi("/Authen");
    }
 
  }
  const [pan,setpanier] = useState();
  const [allpan,setallpan] = useState();
  
  useEffect(()=>{
const panier_interval=setInterval(() => {
  if(user.isconnected){
     fetch("http://localhost:8000/panier")
    .then((response)=>response.json())
    .then((data)=>{
      setallpan(data);
    });


    }}, 1000);
    return ()=>(clearInterval(panier_interval))

    
  },[])
  setTimeout(() => {
    if(allpan){
      const filteredpan = allpan.filter(  panier => panier.id_user === user.id);
      setpanier(filteredpan.length)
      console.log(pan);
    }
  }, 500);
  return (

    <div>
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active link">
          <img className="Life" src={logo} alt="" />
          <span className="Life-name">Life Tech</span>
        </Link>
        <div className="header">
          <div className="header_link">
            <Link to="/" className="link"> Home</Link>
            <Link to="/support" className="link">Support</Link>
            <Link to="/About" className="link">About</Link>
          </div>
          <div className="srh">
            <Search ></Search>
            <FontAwesomeIcon icon={faSearch} className="srhicon"></FontAwesomeIcon>
          </div>
          <div className="cartshop" >

              <FontAwesomeIcon icon={faCartShopping}  onClick={panier}>  
              </FontAwesomeIcon> 
              {pan ?
              <span className="p_length">{pan}</span>
              : <span></span>
            }

          </div>
          <div>
            {user.isconnected ?
              <div className="dropdown log" onClick={drop}>
                <button  className="log-btn">{user.prenom + " " + user.nom} <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon></button>
                <div id="myDropdown" className="dropdown-content">
                  <Link to='/Profile' className="link_p"><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>  Mon Profile</Link>
                  <button onClick={out}><FontAwesomeIcon icon={faSignOut} /> Logout </button>
                </div>
              </div>
              :
              <Link to="/Authen" className="log">
                <button className="log log-btn"><FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon> Login </button>
              </Link>
            }
          </div>
        </div>
        <Link className="icon link" onClick={myFunction}>
          <FontAwesomeIcon icon={faBars} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
