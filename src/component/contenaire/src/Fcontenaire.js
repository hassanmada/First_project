import React, { useEffect, useState } from "react";
import "./App.css";
import Card3 from "../../card/Card3";
import Preload from "../../support/Preload"
import {Link as Goto} from 'react-scroll';

function Fcontenaire(props) {
  const [product, setproduct] = useState();
  const [loading,setloading]= useState(false);
  const[filter ,setfilter]=useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
    if (count < 1) {
    setloading(true)
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setloading(false)
        setproduct(val);

      });
    }
      setfilter(product && product.filter(data => data.categorie === props.name & data.marque === props.brand));
  }, [count]);

  ///////////////////////////////////pagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const [currentpage, setcurrrentpage] = useState(1);
  //nombre des item dans la page
  const [postpertpage] = useState(20);

  const indexoflastpost = currentpage * postpertpage;
  const indexoffirstpost = indexoflastpost - postpertpage;
  const currentposts =filter && filter?.slice(indexoffirstpost, indexoflastpost);

  //change page
  const paginate = (pageNumber) => {
    setcurrrentpage(pageNumber)
  }
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filter && filter?.length / postpertpage); i++) {
    pageNumbers.push(i);
  }
  //////////////////////////////end pagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
    <div>
      <div className="content" id="content">
      {
          loading &&
          <Preload></Preload>
        }
        {currentposts &&
          currentposts.filter(
            (data) => (
              data.categorie === props.name&
              data.marque === props.brand &
              Number(data.prix) <= Number(props.max) &
              Number(data.prix) >= Number(props.min)
            )
          ).map((item) => (
            <Card3 key={item.id} id={item.id} title={item.titre} price={item.prix} path={item.pathimg} promo={item.promo}></Card3>
          ))}
      </div>
      <nav>
        <ul className="pagination pagicentre">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <Goto to="content">
                <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
                </Goto>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Fcontenaire;
