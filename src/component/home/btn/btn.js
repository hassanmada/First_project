import React from "react";
import { Link } from "react-router-dom";
import "./btn.css"

import img1 from "./images/laptop.png"
import img2 from "./images/iphone11.png"
import img3 from "./images/Clavier.png"
import img4 from "./images/Sony.png"
const IMages = () => {
  return (
    <div className="body">
      <figure className="con">
        <img className="Category" src={img1} alt="sample89" />
        <figcaption>
          <h3>Laptop</h3>
        </figcaption>
        <a className="a">
          <Link to="/category/laptop" className="a"></Link>
        </a>
      </figure>
      <figure className="con">
        <img className="Category" src={img2} alt="sample94" />
        <figcaption>
          <h3>Phones</h3>
        </figcaption>
        <a className="a">
          <Link to="/category/phone" className="a"></Link>
        </a>
      </figure>
      <figure className="con">
        <img className="Category" src={img4} alt="sample92" />
        <figcaption>
          <h3>Tablettes</h3>
        </figcaption>
        <a className="a">
          <Link to="/category/tablette" className="a"></Link>
        </a>
      </figure>
      <figure className="con">
        <img className="Category" src={img3} alt="sample92" />
        <figcaption>
          <h3>Accesoire</h3>
        </figcaption>
        <a className="a">
          <Link to="/category/accesoire" className="a"></Link>
        </a>
      </figure>
    </div>
  )
}
export default IMages;