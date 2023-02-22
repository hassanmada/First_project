import { useEffect, useState } from "react";
import Contenaire from "../contenaire/src/Contenaire";
import { Link, useParams } from "react-router-dom";
import Navbar from '../home/Navbar/Navbar'
import "./style.css";

function Filter() {
  const{name}=useParams()
  const [mini, setmin] = useState("50");
  const [maxi, setmax] = useState("40000");
  const [marque, setmarque] = useState();
  const [select, setselect] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/marque")
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        setmarque(val);
        console.log(val);
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
                <option value="">selecter une marque</option>
                {marque &&
                  marque.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="range">
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <label>{maxi} DH</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="in-range">
                      <input
                        type="range"
                        max="40000"
                        min={mini}
                        step="100"
                        value={maxi}
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
                      <label>{mini} DH</label>
                    </td>
                  </tr>
                  <tr>
                    <td className="in-range">
                      <input
                        type="range"
                        max={maxi}
                        min="50"
                        step="100"
                        value={mini}
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
                to={"/category/"+name +"/filter/"+ select + "/" + mini + "/" + maxi}
                className="btn1"
              >
                apply
              </Link>
            </div>
          </div>
        </div>
        <Contenaire name={name}></Contenaire>
      </div>
    </div>
  );
}
export default Filter;
