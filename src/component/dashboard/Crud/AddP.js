import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard";
//composentt ajouter produit

const Addp = () => {
    const [id] = useState("");
    const [titre, settitre] = useState("");
    const [description, setdescription] = useState("");
    const [prix, setprix] = useState("");
    const [image, setimage] = useState("");
    const [categorie, setcat] = useState("");
    const [marque, setmar] = useState("");
    const [marque_name, setmname] = useState("");
    const [promo, setpromo] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8000/marque")
            .then((res) => {
                return res.json();
            })
            .then((val) => {
                setmname(val);
                console.log(val);
            });
    }, []);

    


    const handleSubmit = (e) => {
        e.preventDefault();
        const pathimg = image.replace("C:\\fakepath\\", "/"+categorie+"/"+marque+"/");
        console.log(pathimg)
        const addproduit = { titre, description, categorie, marque, pathimg, prix, promo };
        console.log(addproduit)
        fetch("http://localhost:8000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(addproduit)
        })
        alert("Ajouter avec succès")
        //retour en arier
        navigate('/admin/produits');
    }
    return (
        <div>
            <Dashboard content={
                <div className="Addp">
                    <div>
                        <h2 className="text-muted mb-1">Ajouter produits</h2>

                        <form onSubmit={handleSubmit}>
                            <Link to="/admin/produits"><button className="btn btn-success bi bi-backspace mb-3 "> Retour</button></Link>
                            <table className="table table-bordered table-responsive" style={{ textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Produit titre</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">categorie </th>
                                        <th scope="col">marque </th>
                                        <th scope="col">Prix</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Promotion</th>
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
                                            {/* {titre.length === 0} */}
                                        </td>
                                        <td>
                                            <textarea type="text" className="form-control" rows="5" required value={description} onChange={e => setdescription(e.target.value)}></textarea>
                                            {/* <input type="text"  className="form-control" required value={description} onChange={e => setdescription(e.target.value)} /> */}
                                            {/* {description.length === 0} */}

                                        </td>
                                        <td>
                                            <select value={categorie} className="form-select" onChange={e => setcat(e.target.value)}>
                                                <option></option>
                                                <option value="laptop">laptop</option>
                                                <option value="desktop">desktop</option>
                                                <option value="phone">phone</option>
                                                <option value="tablet">tablet</option>
                                            </select>

                                        </td>
                                        <td>
                                            <select value={marque} className="form-select" onChange={e => setmar(e.target.value)} >
                                                <option></option>
                                                {marque_name &&
                                                    marque_name.map((item) => (
                                                        <option value={item.name} key={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                            </select>

                                        </td>
                                        <td>
                                            <input type="text" className="form-control" required pattern="[0-9\/]*" value={prix} onChange={e => setprix(e.target.value)} />
                                            {/* {prix.length === 0 && <p style={{ color: "red" }}>Taper le Prix</p>} */}
                                        </td>
                                        <td>
                                            <input type="file" className="input-group" value={image} onChange={e => setimage(e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="text" value={promo} className="form-control" onChange={e => setpromo(e.target.value)} />
                                        </td>
                                        <td >
                                            <button type="submit" className="btn btn-primary bi bi-check-square-fill mb-1 "> Save</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>

                </div>
            }></Dashboard>
        </div>

    )
}
export default Addp