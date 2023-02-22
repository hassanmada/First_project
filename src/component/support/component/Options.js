import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMobileScreenButton,
  faLaptop,
  faDesktopAlt,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../home/Navbar/Navbar";
function Options() {
  return (
    <div>
      
      <div>
      <Navbar></Navbar>
        <div className="list-box">
          <div className="listi">
            <Link className="option" to={"/support/pc"} >
              <FontAwesomeIcon icon={faDesktopAlt} size="6x" className="icon" />
              <p>Desktop/Laptop</p>
            </Link>
            <Link className="option" to={"/support/phone"}>
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                size="6x"
                className="icon"
              />
              <p>Smart Phone</p>
            </Link>
            <Link className="option" to={"/support/tablet"}>
              <FontAwesomeIcon
                icon={faTabletScreenButton}
                size="6x"
                className="icon"
              />
              <p>Tablet</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Options;
