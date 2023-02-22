import React, { useState } from "react";
import { useSelector } from "react-redux";
import Citys from "./citys";


export default function Espece({price}) {
    // const handleclick = () => {
    //     const Commandeespece={ville,codepostal,adress}
    // }
    // console.log("passe")
    const user = useSelector(user => user);
    const [adress, setadress] = useState("");
    const [codepostal, setcodepostal] = useState("");
    const [ville, setville] = useState("");
    const confirmer = false;
    const fname = user.nom+" "+user.prenom;
    const email = user.email;

    const handleSumit = (e) => {
        e.preventDefault();

        const commandeespece = {fname, ville, email, codepostal, adress,price, confirmer };
        console.log(commandeespece)
        fetch("http://localhost:8000/commandeespece", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commandeespece)
        })
        // alert("commande passe")
    }

    // const [tel, settel] = useState("");

    return (
        <div style={{ margin: "auto", marginTop: "50px", width: "400px" }}>
            <form onSubmit={handleSumit}  >
                <table className="table table-sm table-responsive">
                    <tbody>
                        {/* <tr>
                            <th>
                                <label>Nom</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" placeholder="Nom" required />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>preom</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" placeholder="Prenom" required />
                            </td>
                        </tr> */}
                        <tr>
                            <th scope="row">
                                <label>Adresse</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" value={adress} placeholder="Adresse" onChange={e => setadress(e.target.value)} required />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label>Code postal </label>
                            </th>
                            <td>
                                <input type="text" className="form-control" value={codepostal} placeholder="Code postal" onChange={e => setcodepostal(e.target.value)} required  pattern="[0-9]+"/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" >
                                <label>Ville </label>
                            </th>
                            <td>
                                <select className="form-select" ariea-label="Ville" value={ville} onChange={e => setville(e.target.value)} required>

                                    {Citys.map((ville,i) => (
                                        <option key={i}>
                                            {ville.city}
                                        </option>
                                    ))}
                                </select>
                                {/* <input type="text" className="form-control" value={ville} placeholder="Ville" onChange={e => setville(e.target.value)} /> */}
                            </td>
                        </tr>
                        {/* <tr>
                            <th scope="row">
                                <label>Numero tel</label>
                            </th>
                            <td>
                                <input type="text" className="form-control" value={tel} placeholder="Telephone" onChange={e => settel(e.target.value)}
                                    // disabled="diabled"
                                    required
                                />
                            </td>
                        </tr> */}
                        {/* <td>
                                <input type="checkbox" className="check m-1" onClick={hidden}/>
                                <label>Change numero</label>
                            </td>
                        </tr> */}
                        <tr>
                            <td></td>
                            <th scope="row" style={{ textAlign: "center" }}>
                                <input type="submit" value="Confirmer" className="btn btn-primary "
                                //  onClick={handleclick} 
                                 />
                            </th>

                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
