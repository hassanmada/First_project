import React from "react";
import imag from "../Pic/Iphone11Blanc.png"
import data from "../data"



const Cards = ({ item, handleClick }) => {


 const   { title, desc, price,  }= item;

function ADDPanier(){

 


  {
    fetch('  http://localhost:8000/Panier',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(item)
  })
  }
 
  
  
}


  function bothFun(){
    handleClick(item)
    ADDPanier()
  }


  return (
    <div className="cards">
      <div className="image_box">
        <img src={imag} alt="" />
      </div>
      <div className="details">
        {/* <p>{imag}</p> */}
        <p>{title}</p>
        <p>{desc}</p>
        <p>Price - {price}DH</p>
        <button onClick={() => bothFun()}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;