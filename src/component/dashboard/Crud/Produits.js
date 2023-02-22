import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Dashboard from "./Dashboard";


const Produits = () => {
    const [produitdata, setproduitdata] = useState(null);
    const [del, setdel] = useState(false)
    const navigate = useNavigate();

    const LoadEdite = (id) => {
        navigate('/admin/Editeproduit/' + id)
    }
    function Remove(id) {
        if (window.confirm("Do you want to remove ")) {
            fetch("http://localhost:8000/products/" + id, {
                method: "DELETE"
            }).then((res) => {
                setdel(true)
                // console.log("fffrrrrrr")
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch(" http://localhost:8000/products").then((res) => {
            return res.json();
        }).then((res) => {
            setproduitdata(res);
            setdel(false)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [del])

    ///////////////////////////////////pagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [currentpage, setcurrrentpage] = useState(1);
    //nombre des item dans la page
    const [postpertpage] = useState(4);

    const indexoflastpost = currentpage * postpertpage;
    const indexoffirstpost = indexoflastpost - postpertpage;
    const currentposts = produitdata?.slice(indexoffirstpost, indexoflastpost);

    //change page
    const paginate = (pageNumber) => {
        setcurrrentpage(pageNumber)
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(produitdata?.length / postpertpage); i++) {
        pageNumbers.push(i);
    }
    //////////////////////////////end pagination\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    return (
        <div>
            <Dashboard content={
                <div className="contanerrootcrud">
                    <h3 className="text-muted m-1 "> Liste des Produits</h3>
                    <Link to="Addproduit">
                        <button className="btn  btn-success mb-3 mt-3  bi bi-bookmark-plus"> Ajouter</button>
                    </Link>
                    <table className="table table-bordered table-responsive " style={{ textAlign: "center" }}>
                        <thead >
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Produit titre</th>
                                <th scope="col">Description </th>
                                <th scope="col">Categorie</th>
                                <th scope="col">Marque</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Image</th>
                                <th scope="col">Promotion</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentposts &&
                                currentposts.map(item => (
                                    <tr key={item.id}>
                                        <td >{item.id}</td>
                                        <td>{item.titre}</td>
                                        <td>
                                            {item.description}
                                        </td>
                                        <td>{item.categorie}</td>
                                        <td>{item.marque}</td>
                                        <td>{item.prix}</td>
                                        <td>{item.pathimg}</td>
                                        <td>{item.promo}</td>
                                        <td>

                                            <button type="button" value="Editer" className="btn  btn-primary mt-1 me-3 bi bi-check-circle" onClick={() => { LoadEdite(item.id) }}> Edite</button>
                                            <button className="btn  btn-danger mt-1 bi bi-trash" value="Supprimer" onClick={() => { Remove(item.id) }}> Remove</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {/* naviger entre les page */}
                    <nav>
                        <ul className="pagination">
                            {pageNumbers.map(number => (
                                <li key={number} className="page-item">
                                    <button onClick={() => paginate(number)}  className="page-link">
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            } ></Dashboard>
        </div>
    )
}
export default Produits