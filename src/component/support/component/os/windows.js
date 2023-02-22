import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preload from "../../Preload";
import Navbar from "../../../home/Navbar/Navbar";
import "./win.css";
function Windows() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState("");
  const { device, os } = useParams()

  useEffect(() => {
    setloading(true);
    fetch("http://localhost:8000/support")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setdata(result);
        setloading(false);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="winBody">
        <div className="sidenav">
          {data &&
          data
            .filter(
              (device_name) =>
                (device_name.device === device) &
                (device_name.os === os)
            )
            .map((item) => (
              <div key={item.id}>
                <p className="a" title={item.titre}>{item.titre}</p>
                <hr></hr>
              </div>
            ))}
        </div>
        <div className="main">
          {loading && <Preload />}
          {device + "/" + os}
          <hr/>
          {data &&
          data
            .filter(
              (device_name) =>
                (device_name.device === device) &
                (device_name.os === os)
            )
            .map((item) => (
              <div key={item.id}>
                <h2>{item.titre}</h2>
                <p className="winp">{item.description}</p>
                <hr></hr>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Windows;
