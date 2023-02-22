import React from "react";

import img1 from "./images/laptop.png";
import img2 from "./images/Clavier.png";

import img3 from "./images/iphone11.png";

import img4 from "./images/Sony.png";


 
// import "./slider.css";

import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"

export default function Slider (){

      return (
        <center>
        <Carousel>
          <Carousel.Item>
          
        <div className="slide">
            <img
              className="Pic"
              src={img1}
              alt="Second slide"
            
            />
        </div>
            <Carousel.Caption>
              <h3>Acer Nitro 5</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide">
            <img
              className="Pics"
              src={img2}
              alt="Second slide"
            />
        </div>
            <Carousel.Caption>
              <h3>Clavier Gaming</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="slide">
            <img
             className="Pics"
              src={img3}
              alt="Second slide"
            />
        </div>
            <Carousel.Caption>
              <h3>IPhone 11 Pro</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="slide">
            <img
             className="Pics"
              src={img4}
              alt="Second slide"
            />
        </div>
    
            <Carousel.Caption>
              <h3>Sony Tablette</h3>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       
        </center>
      );
    
    


}