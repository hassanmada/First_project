import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../../home/Navbar/Navbar";

function TabletOS() {
  return (
    <div>
        <Navbar></Navbar>
      <div className="list-box">
          <div className="listi">
      <Link className="option" to={"/support/tablet/android"}>
        <FontAwesomeIcon icon={faAndroid} size="6x" className="icon" />
        <p>Android</p>
      </Link>
      <Link className="option" to={"/support/tablet/ios"}>
        <FontAwesomeIcon icon={faApple} size="6x" className="icon" />
        <p>Ios</p>
      </Link>
      </div></div></div>
  );
}
export default TabletOS;