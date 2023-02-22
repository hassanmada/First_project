import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
// import list from "./data";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setlist] = useState();
  useEffect(() => {

    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setlist(val);
      });
  }, []);
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
        </div>
        <div className="template_Container">
          {list &&
            list
              .filter((val) => {
                if (searchTerm == "") {
                  return;
                } else if (val.titre.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((item) => {
                return (
                  <div key={item.id}>
                    <Link to={"/product/" + item.id}  className="template">
                      <img src={"/products" + item.pathimg} alt="" />
                      <h5>{item.titre}</h5>
                      <p className="price">{item.prix}DH</p>
                    </Link>
                  </div>
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;