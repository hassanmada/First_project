import React, { useEffect, useState } from "react";
import Card3 from "../../card/Card3";
import Preload from "../../support/Preload";
import {Link as Goto} from 'react-scroll';

function Contenaire(props) {
  const [product, setproduct] = useState();
  const [loading,setloading]= useState(false);

  useEffect(() => {
    setloading(true)
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setloading(false)
        setproduct(val);
      });
  }, []);

    function Products(data) {

        if(data){
            return(
              currentposts &&
              currentposts.map((item) => (
                      <Card3 key={item.id} id={item.id} title={item.titre} price={item.prix} path={item.pathimg} promo={item.promo}></Card3>

                    ))
            )
    
        }
    
  }
    ///////////////////////////////////pagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [currentpage, setcurrrentpage] = useState(1);
    //nombre des item dans la page
    const [postpertpage] = useState(20);
  
    const indexoflastpost = currentpage * postpertpage;
    const indexoffirstpost = indexoflastpost - postpertpage;
    const currentposts = product?.slice(indexoffirstpost, indexoflastpost);
  
    //change page
    const paginate = (pageNumber) => {
      setcurrrentpage(pageNumber)
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(product?.length / postpertpage); i++) {
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
        
        <Products value={props}></Products>
      </div>
      <nav style={{ margin:"auto"}}>
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

export default Contenaire;
