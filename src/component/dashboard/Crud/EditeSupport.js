import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function EditeSupport() {
    const { id } = useParams();
    const [titre, settitre] = useState("");
    const [description, setdescription] = useState("");
    const [device, setdevice] = useState("");
    const [os, setos] = useState("");


    useEffect(() => {
        fetch(" http://localhost:8000/support/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log("res", resp)
            settitre(resp.titre)
            setdescription(resp.description)
            setdevice(resp.device)
            setos(resp.os)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [id]);



    const navigate = useNavigate()
    const fonctiondubmit = (e) => {
        e.preventDefault();
        const editeroduit = { titre,description,device,os  };
        console.log(editeroduit)
        fetch("http://localhost:8000/support/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editeroduit)
        }).then((res) => {
            // alert("Modifier avec succès")
            navigate('/admin/support');
        }).catch((err) => {
            // console.log(err.message)
        })
    }
    return (
        <>
            <Dashboard content={
                <div className="Editep">
                    <div>
                        <h2 className="text-muted mb-1">Produit Edite</h2>
                        <div>
                            <form onSubmit={fonctiondubmit}>
                                <Link to="/admin/support"><button className="btn btn-success bi bi-backspace mb-3 "> Retour</button></Link>
                                <table className="table table-bordered table-responsive" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Titre</th>
                                            <th scope="col">Device</th>
                                            <th scope="col">Os</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="text" className="form-control" value={id} disabled="diabled" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" required value={titre} onChange={e => settitre(e.target.value)} />
                                            </td>

                                            <td>
                                                <select value={device} className="form-select" required onChange={e => setdevice(e.target.value)}>
                                                    <option></option>
                                                    <option value="pc">Pc</option>
                                                    <option value="phone">Phone</option>
                                                    <option value="tablet">Tablet</option>
                                                </select>
                                            </td>
                                            <td >
                                                <select value={os} className="form-select" required onChange={e => setos(e.target.value)} >
                                                    <option></option>
                                                    <option value="windows">Windows</option>
                                                    <option value="android">Android</option>
                                                    <option value="mac">Mac</option>
                                                    <option value="ios">Ios</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button type="submit" className="btn btn-primary bi bi-check-square-fill "> Edite</button>
                                            </td>
                                        </tr>
                                        <tr>
                                                <th scope="col" colSpan="5">Description </th>
                                        </tr>
                                        <tr>
                                            <td colSpan="5">
                                                <textarea type="text" className="form-control" rows="5" cols="50" required value={description} onChange={e => setdescription(e.target.value)}></textarea>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>

                    </div>
                </div>
            }></Dashboard>

        </>
    );
}