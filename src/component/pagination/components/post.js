import React from "react";
import LoadApp from "./loadingapp";


const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2><LoadApp /></h2>
    }
    return (
        <div>
            <ul className="list-group mb-4">
                {posts && posts.map(element => (
                    <li key={element.id} className="list-group-item">
                        {element.ville}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Posts