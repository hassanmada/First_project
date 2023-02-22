import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Support() {
    const [del, setdel] = useState(false)
    const [data,setdata]=useState()
    useEffect(() => {
        fetch(" http://localhost:8000/support/").then((res) => {
            return res.json();
        }).then((resp) => {
            setdata(resp)
            setdel(false)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [del]);

    function Remove(id) {
        if (window.confirm("Do you want to remove ")) {
            fetch("http://localhost:8000/support/" + id, {
                method: "DELETE"
            }).then((res) => {
                setdel(true)

            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    return (
        <>
            <Dashboard content={
            <div className="contanerrootcrud">
                <h3 className="text-muted m-1 "> Liste des Articles</h3>
                <Link to="AddSupport">
                    <button className="btn  btn-success mb-3 mt-3  bi bi-bookmark-plus"> Ajouter</button>
                </Link>
                <table className="table table-bordered table-responsive " style={{ textAlign: "center" }}>
                    <thead >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Titre</th>
                            <th scope="col">Device</th>
                            <th scope="col">Os</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map(item => (
                                <tr key={item.id}>
                                    <td >{item.id}</td>
                                    <td>{item.titre}</td>
                                    <td>{item.device}</td>
                                    <td>{item.os}</td>
                                    <td>
                                    <Link to={"/admin/support/EditeSupport/"+item.id}>    
                                        <button type="button" value="Editer" className="btn  btn-primary mt-1 me-3 bi bi-check-circle" > Edite</button>
                                    </Link>
                                        <button className="btn  btn-danger mt-1 bi bi-trash" value="Supprimer" onClick={() => { Remove(item.id) }}> Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>}
            />
        </>
    );
}