import React, { useEffect } from "react";
import llogo from "./icons/Logo-removebg-preview.png"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useStore } from "react-redux";
import { logout } from "../../store/store";
import "./Style.css"


export default function Dashboard(props) {
    const user = useSelector(user => user);
    const store = useStore();
    const nav = useNavigate();
    const out = () => {
        store.dispatch(logout());
    }
    useEffect(() => {
        if (!user.isconnected & user.isadmin == 0) {
            nav('/Authen');
        }
    })
    return (
        <div className="Dashboard">
            <aside>
                <h1><img src={llogo} alt="logo" width="200px" /></h1>
                <hr />
                <div className="Adminimg">
                    <h3>{user.prenom + " " + user.nom}</h3>
                </div>
                <hr />
                <div className="DashAsideButtons">
                    <div>
                        <Link to="/admin"><button>Accueil</button></Link>
                        <Link to="/admin/produits"><button>Gérer Produit</button></Link>
                        <Link to="/admin/support"><button>Gérer Support</button></Link>
                        <button onClick={out}>Se deconnecter</button>
                    </div>
                </div>
            </aside>
            <section>
                <div className="DashCenter">
                    <nav>
                        <button className="btn btn-warning mt-4">Nombre de commande</button>
                        <button className="btn btn-warning mt-4">Avis de client</button>
                    </nav>
                    <div className="DashProduct">
                        <div className="App">
                            {props.content}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
