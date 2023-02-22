import React from "react";
// import logo from './Vivobook Pro.jpg'
import {Link} from "react-router-dom";
import "./Style.css"
export default function CardProduct(props){
    const Prix = () =>{ if(props.promo){
            if(props.promo != "0"){
                const originalPrice = Number(props.price);
                const discountPercentage = Number(props.promo); 
                const discountAmount = (originalPrice * (discountPercentage/100));
                const finalPrice = (originalPrice - discountAmount).toFixed(2);
                return(<div><del>{props.price}DH</del><p> {finalPrice}DH</p></div>)
            }else{
                return(props.price+"DH" )
            }
        }
    }
    return(
    <Link to={"/product/"+props.id} className="CardProduct">
        {props.promo != "0" && <p className="promospan">-{props.promo}%</p>}
        <img src={"/products"+props.path}  alt=""/>
        <hr />
        <h4>{props.title}</h4>
        <p className="price"><Prix/></p>
        {/* <p>Pc portable haut gamme</p> */}
        {/* <p><button>Add to Cart</button></p> */}
    </Link>
    )
}