import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";



export default function Commandes() {
    const [commandes, setcommandes] = useState();
    const [done,setdone]= useState(false)
    // const nav = useNavigate()
    useEffect(() => {
        fetch("http://localhost:8000/commandeespece").then((res) => {
            return res.json();
        }).then((res) => {
            setcommandes(res);
            // console.log(res, "resultat")

        }).catch((err) => {
            console.log(err.message);
        })

    }, [done]);

    const confirme = (item) => {
        // const confirmer=true
        // console.log("item", item)
        setdone(true);
        const commandeespece = { ville: item.ville, codepostal: item.codepostal, adress: item.adress, email: item.email, price: item.price, fname: item.fname, confirmer: true };
        fetch("http://localhost:8000/commandeespece/" + item.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commandeespece)
        }).then ( response => response.json() )
        .then ( res => {
            setdone(false);
        })
        // console.log("confirme", commandeespece)
        // nav('/')
        // route retourn ala meme page 
    }
    const refuse = (id) => {
        setdone(true);
        fetch("http://localhost:8000/commandeespece/" + id, {
            method: "DELETE"
        }).then((res) => {
            console.log("res", res)
            setdone(false);
        }).catch((err) => {
            console.log(err.message)
        })
        // nav('/')
        //route retourn ala meme page 
    }

    return (
        <div style={{ width: "1000px", textAlign: "center" }}>

            <h3 className="text-muted mb-3 ">Commandes</h3>
            <table className="table table-bordered table-responsive ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom et Prénom</th>
                        <th scope="col">Ville</th>
                        <th scope="col">Code postal</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Email</th>
                        <th scope="col">Prix</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {commandes && commandes.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.ville}</td>
                            <td>{item.codepostal}</td>
                            <td>{item.adress}</td>
                            <td>{item.email}</td>
                            <td>{item.price}</td>
                            <td>
                                {!item.confirmer ?
                                    <button className="btn  btn-success mt-1 me-3 " onClick={() => confirme(item)} ><i className="bi bi-check-circle"></i> Confirmer</button> :
                                    <button className="btn  btn-danger mt-1 me-3" onClick={() => refuse(item.id)}><i className="bi bi-trash"></i> Refuser</button>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}