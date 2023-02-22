import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  const [pwd, setpwd] = useState("");
  const [cpwd, setcpwd] = useState("");
  const [cerror, setcerror] = useState("");
  const [perror, setperror] = useState("");
  const [oldUsers, setoldUsers] = useState("");
  const [erroremail, seterroremail] = useState("");
  const [errortel, seterrortel] = useState("");
  const [test, settest]=useState(false);
  const [loading,setloading]=useState("S'inscrire")
  const goto = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((val) => {
        setoldUsers(val);
      });
  },[]);

  const pwdtest = () => {
    if ((pwd.length < 8) & (pwd !== " ")) {
      setperror(<span>au moins 8 caractères</span>);
    } else {
      setperror("");
    }
  };
  const cpwdtest = () => {
    if (pwd !== cpwd) {
      setcerror(<span>password doesn't match</span>);
    } else {
      setcerror("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const isadmin = 0;
    const newUser = { nom, prenom, email, tel, pwd, isadmin };

    oldUsers.forEach((user) => {
      settest(false);
      if (user.email === email) {
        return seterroremail(<span>cette email existe deja</span>)
      }
      if (user.tel === tel) {
          return seterrortel(<span>ce numero existe deja</span>)
        } else {
            settest(true)
            seterroremail("")
            seterrortel("")

        }
      } 
    );
    if(test){
      setloading("en cours")
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then(() => {
        console.log("succes");
        setloading("S'inscrire")
        settest(false);
        goto('/')
      });
    }
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <h1>SIGNUP</h1>
          </div>
          <div className="full_name">
            <div className="input_user">
              <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setnom(e.target.value)}
                required
                pattern="[a-zA-Z]+"
              />
            </div>
            <div className="input_user marg">
              <input
                type="text"
                placeholder="Prenom"
                value={prenom}
                onChange={(e) => setprenom(e.target.value)}
                required
                pattern="[a-zA-Z]+"
              />
            </div>
          </div>
          <div className="input_label">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          {erroremail}
          <div className="input_label">
            <input
              type="text"
              placeholder="Example:+212xxxxxxxxx"
              value={tel}
              onChange={(e) => settel(e.target.value)}
              required
              pattern="[+212][0-9]{12}"
            />
          </div>
          {errortel}
          <div className="input_label">
            <input
              type="password"
              placeholder="Mot de passe"
              value={pwd}
              onChange={(e) => setpwd(e.target.value)}
              onKeyUp={pwdtest}
              required
            />
            {perror}
          </div>
          <div className="input_label">
            <input
              type="password"
              placeholder="Confirmation du mot de passe"
              value={cpwd}
              onChange={(e) => setcpwd(e.target.value)}
              onKeyUp={cpwdtest}
              required
            />
            {cerror}
          </div>
          <div className="button-box">
            <button type="submit">{loading}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
