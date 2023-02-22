import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/post";
import Pagination from "./components/pagination";




const App = () => {
    const [posts, setposts] = useState();
    //loading avan l'affichage 
    const [loading, setloading] = useState(false);
    // la page qui affiche premier
    const [currentpage, setcurrrentpage] = useState(1);
    //nombre des item dans la page
    const [postpertpage] = useState(7);

    useEffect(() => {
        const fetchposts = async () => {
            setloading(true);
            const res = await axios.get('http://localhost:8000/commandeespece');
            setposts(res.data);
            console.log('resultat', res.data)
            setloading(false);
        }

        fetchposts();
    }, []);


    const indexoflastpost = currentpage * postpertpage;
    const indexoffirstpost = indexoflastpost - postpertpage;
    const currentposts = posts?.slice(indexoffirstpost, indexoflastpost);

    //change page
    const  paginate=(pageNumber)=>{
        setcurrrentpage(pageNumber)
    }


    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-2"> Mon app pagination manuelle</h1>
            <Posts posts={currentposts} loading={loading} />
            <Pagination 
            postsperpage={postpertpage}
            totalpots={posts?.length} 
            paginate={paginate}
            />
        </div>
    )
}
export default App