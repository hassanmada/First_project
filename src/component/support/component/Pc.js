import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../../home/Navbar/Navbar";
function PcOS() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="list-box">
          <div className="listi">
      <Link className="option" to={"/support/pc/windows"}>
        <FontAwesomeIcon icon={faWindows} size="6x" className="icon" />
        <p>Windows</p>
      </Link>
      
      <Link className="option" to={"/support/pc/mac"}>
        <FontAwesomeIcon icon={faApple} size="6x" className="icon" />
        <p>Mac os</p>
      </Link>
      </div>
      </div>
      </div>

  );
}
export default PcOS;
