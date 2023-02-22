import React from "react";
import list from "../data";
import Cards from "./card";
import "../styles/panier.css";


const Panier = ({ handleClick }) => {
  return (

    <section className="p_section">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
  
    </section>
    

  );
};

export default Panier;