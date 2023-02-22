import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/cart.css";
import Espece from "./Espece";
import Payement from "./Payement";

const Cart = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState();
  const [data, setdata] = useState(false);
  const [panier, setpanier] = useState();
  const user = useSelector(user => user);


  const handleRemove = (id) => {

    fetch("http://localhost:8000/panier/" + id, {
      method: 'DELETE',
    });
    setdata(true)
  };

  useEffect(() => {
    async function getPanier() {
      const resp = await fetch("http://localhost:8000/panier");
      setdata(false)
      const json = await resp.json();
      setCart(json);

    }

    getPanier();

  }, [data]);

  setTimeout(() => {
    if (cart) {
      const filteredData = cart.filter(item => item.id_user === user.id
      );
      setpanier(filteredData);

      let ans = 0;
      panier.map((item) => (ans += Number(item.prix_p)));
      setPrice(ans);

    }
  }, 1000);

  return (
    <div>

      <article className="c_article">

        {panier && panier.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={"/products" + item.img_p} alt="" />
              <p>{item.titre_p}</p>
            </div>
            <div>

            </div>
            <div>
              <span>{item.prix_p} DH</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart : </span>
          <span> {price} DH </span>
        </div>
      </article>
      <div style={{ marginTop: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Espece price={price}/>
        <Payement />
      </div>

    </div>
  );
};

export default Cart;