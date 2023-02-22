import { useEffect, useState } from "react";
import Fcontenaire from "../contenaire/src/Fcontenaire";
import { Link, useParams } from "react-router-dom";
import Navbar from '../home/Navbar/Navbar'
import "./style.css";

function Filted() {
  const { name,brand,mini,maxi } = useParams();
  const [min, setmin] = useState("100");
  const [max, setmax] = useState("40000");
  const [marque, setmarque] = useState();
  const [select, setselect] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/marque")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setmarque(val);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="Contenaire">
        <div className="filter-box">
          <div className="filter">
            <div className="marque">
              <select
                onChange={(e) => {
                  setselect(e.target.value);
                }}
              >
                <option value="" >
                  selecter une marque
                </option>
                {marque &&
                  marque.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))
                  }
              </select>
            </div>
            <div className="range">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <label>{max} DH</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="in-range">
                      <input
                        type="range"
                        max="40000"
                        min={min}
                        step="100"
                        value={max}
                        onChange={(e) => {
                          setmax(e.target.value);
                        }}
                        name=""
                        id=""
                      />
                    </td>
                    <td>
                      <p>max</p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <label>{min} DH</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="in-range">
                      <input
                        type="range"
                        max={max}
                        min="50"
                        step="100"
                        value={min}
                        onChange={(e) => {
                          setmin(e.target.value);
                        }}
                        name=""
                        id=""
                      />
                    </td>
                    <td>
                      <p>min</p>
                    </td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
            <div className="btnbox">
              <Link
                style={{ pointerEvents: select === undefined ? "none" : "" }}
                to={"/category/"+name +"/filter/"+ select + "/" + min + "/" + max}
                className="btn1"
              >
                apply
              </Link>
              <Link to={"/category/"+name} className="btn-r">
                rest
              </Link>
            </div>
          </div>
        </div>
        <Fcontenaire brand={brand} max={maxi} min={mini} name={name}></Fcontenaire>
      </div>
    </div>
  );
}
export default Filted;
