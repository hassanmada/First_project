import React, { useEffect } from "react";
import './App.css';
// import img1 from '../card/Vivobook Pro.jpg';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../home/Navbar/Navbar"
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../home/footer/Footer"
function Product() {
  const{id}=useParams();
  const [comment, setComment] = useState("");
  const [comments, setcomments] = useState([]);
  const [newcom,setnc]=useState(false);
  const nav = useNavigate()
  const[data,setdata]=useState("");
  const id_product = id;
  const user = useSelector(user => user)
  const id_user = user.id;
  const UserName=user.prenom+" "+user.nom;
  const num_product = Number(id_product);
  const [prix_p,setprix]=useState();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.isconnected){
      const addcomment = {num_product,id_user,comment,UserName}
      if(comment !== ""){
        fetch("http://localhost:8000/comment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(addcomment),
        }).then(() => {
          setnc(true)
          setComment("")
        });
      }
    }else{
      nav('/Authen');
    }
  }




  useEffect(() => {
    async function getProdut() {
      const resp = await fetch("http://localhost:8000/products/"+id);
      const json = await resp.json();
      setdata(json);
    };
    getProdut();

    async function getcomments() {
      const resp = await fetch("http://localhost:8000/comment");
      const json = await resp.json();
      setcomments(json)
      setnc(false)
    }
    getcomments();
    
  },[newcom]);



  const addproducts = (e)=>{
    e.preventDefault();
    const titre_p= data.titre;
    const img_p= data.pathimg;
    if(user.isconnected){
      const addproduct = {num_product,id_user,titre_p,img_p,prix_p}
      if(data){
        fetch("http://localhost:8000/panier", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(addproduct),
        }).then(() => {
          console.log("success")
        });
      }
    }else{
      nav('/Authen');
    }
  }
  const Prix = () =>{ if(data.promo){
    if(data.promo != "0"){
        const originalPrice = Number(data.prix);
        const discountPercentage = Number(data.promo); 
        const discountAmount = (originalPrice * (discountPercentage/100));
        const finalPrice = (originalPrice - discountAmount).toFixed(2);
        setprix(finalPrice);
        return(<div><del>{data.prix}DH</del><p> {finalPrice}DH</p></div>)
    }else{
      setprix(data.prix);
        return(data.prix+"DH")
    }
    }}

  return (
    <div className="body_home_app">
      <NavBar></NavBar>
      <div className="App" key={id}>
        <div className="MainContainer">
          <div className="Image">
            <img src={"/products"+data.pathimg} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h1>{data.titre}</h1>
            </div>
            <div>
              <div className="description">
              <p >{data.description}</p>
              </div>
{/*               
              <h3 >Choose color</h3>
              <div className="select">
                <img className="img2" src={img1} alt="Iphone 11 Violet" />
                <img className="img3" src={img1} alt="Iphone 11 Rouge" />
              </div> */}
              {data.promo !="0"?<p className="promospan">-{data.promo}%</p>:<p></p>}
              
              <p className="Price"><Prix/></p>
            </div>
            <form onSubmit={addproducts} >
              <button className="bouton" type="submit"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Add to card</button> 
            </form>

          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="comment-flexbox">
          <form onSubmit={handleSubmit} >
          <h3>Add Comment</h3> 
            <textarea
            value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="input-box " 
              rows="4"
              cols="50"
              placeholder="Enter your Review "/>
            <div className="comment-button">
            <button type="submit">Submit</button>
          </div>
          </form>
          {/* <div className="comment-container">{comments}</div> */}

          {comments.filter(com => num_product === com.num_product).map((text) => {
            return (
              <div key={text.id} className="comment-container" > 

              <div className="User"> {text.UserName} </div>
              <div className="text">{text.comment}</div>
              </div>

            )
          })}
        </div>

      </div>

      <Footer></Footer>
    </div>
  )
}


export default Product;
