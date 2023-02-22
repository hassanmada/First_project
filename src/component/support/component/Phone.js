import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../../home/Navbar/Navbar";

function PhoneOS() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="list-box">
        <div className="listi">
          <div>
            <Link className="option" to={"/support/phone/android"}>
              <FontAwesomeIcon icon={faAndroid} size="6x" className="icon" />
              <p>Android</p>
            </Link>
          </div>

          <Link className="option" to={"/support/phone/ios"}>
            <FontAwesomeIcon icon={faApple} size="6x" className="icon" />
            <p>Ios</p>
          </Link>
        </div>
      </div>
    </div>

  );
}
export default PhoneOS;
