import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Editep() {
    // composant editer produit
    // const [data, setdata] = useState("");
    const { id } = useParams();

    // console.log(id);

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
    // console.log("data",titre)
    // const [idi, setid] = useState(data.id);
    // console.log("datauu",titre)
    const [titre, settitre] = useState("");
    const [description, setdescription] = useState("");
    const [prix, setprix] = useState("");
    const [image, setimage] = useState("");
    const [categorie, setcat] = useState("");
    const [marque, setmar] = useState("");
    const [promo, setpromo] = useState("");
    const [marque_name, setmname] = useState("");

    useEffect(() => {
        fetch(" http://localhost:8000/products/" + id).then((res) => {
            return res.json();
        }).then((resp) => {
            // setdata(resp)
            console.log("res", resp)
            settitre(resp.titre)
            setdescription(resp.description)
            setprix(resp.prix)
            setimage(resp.pathimg)
            setcat(resp.categorie)
            setmar(resp.marque)
            setpromo(resp.promo)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [id]);
    
    const navigate = useNavigate()
    const fonctiondubmit = (e) => {
        e.preventDefault();
        if(image){
            if (image.includes("C:\\fakepath\\")) {
                var pathimg = image.replace("C:\\fakepath\\", "/"+categorie+"/"+marque+"/");
            }else{
                var pathimg = image;
            }
        }
        const editeroduit = { titre, categorie, marque, description, pathimg, prix, promo };
        console.log(editeroduit)
        fetch("http://localhost:8000/products/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editeroduit)
        }).then((res) => {
            // alert("Modifier avec succès")
            navigate('/admin/produits');
        }).catch((err) => {
            // console.log(err.message)
        })
    }
    return (
        <div>

            <Dashboard content={
                <div className="Editep">
                    <div>
                        <h2 className="text-muted mb-1">Produit Edite</h2>
                        <div>
                            <form onSubmit={fonctiondubmit}>
                                <Link to="/admin/produits"><button className="btn btn-success bi bi-backspace mb-3 "> Retour</button></Link>
                                <table className="table table-bordered table-responsive" style={{ textAlign: "center" }}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Produit titre</th>
                                            <th scope="col">Description </th>
                                            <th scope="col">categorie</th>
                                            <th scope="col">marque</th>
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
                                            </td>
                                            <td>
                                                <textarea type="text" className="form-control" rows="5" cols="50" required value={description} onChange={e => setdescription(e.target.value)} ></textarea>
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
                                            <td >
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
                                            </td>
                                            <td>
                                                <input type="file" className="input-group" onChange={e => setimage(e.target.value)} />

                                            </td>
                                            <td>
                                                <input type="text" className="form-control" value={promo} onChange={e => setpromo(e.target.value)} />
                                            </td>
                                            <td>
                                                <button type="submit" className="btn btn-primary bi bi-check-square-fill "> Edite</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>

                    </div>
                </div>
            }></Dashboard>

        </div>
    )
}
export default Editep