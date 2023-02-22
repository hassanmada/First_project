import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import {login}from '../../store/store'
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setemail] = useState();
  const [pwd, setpwd] = useState();
  const[users,setusers]=useState();
  const[emailerror, setemailerror]=useState("");
  const [loading,setloading]=useState("Se connecter")
  // const dispatch = useDispatch()
  const store = useStore()

  const nav = useNavigate()
  const user = useSelector(user => user);


  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((val) => {
        setusers(val);
      });
      if(user.isconnected){
        nav('/');
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading("en cours")
    users.forEach((user) => {
      
      if (user.email !== email | user.pwd !== pwd) {
        setloading("Se connecter")
        return setemailerror(<div className="error">Voter email ou mot de passe est incorrect</div>);

      } else {
        setemailerror("")
        setloading("Se connecter")
        store.dispatch(login(user.id,user.nom,user.prenom,user.email,user.tel,user.isadmin))
        switch(user.isadmin){
          case 1:
            nav('/admin')
            break;
          case 0:
            nav('/')
            break;
            default:
              break
        }
      } 
    });
  };
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>LOGIN</h1>
            {emailerror}
          </div>
          <div className="input_label">
            <input
              type="email"
              placeholder="Email"
              // value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          
          <div className="input_label">
            <input
              type="password"
              placeholder="Mot du passe"
              // value={pwd}
              onChange={(e) => setpwd(e.target.value)}
              required
            />
          </div>

          <div className="button-box">
            <button>{loading}</button>
            <p>Mot de passe oublié?</p>
          </div>
           
        </form>
      </div>
    </div>
  );
}
export default Login;
