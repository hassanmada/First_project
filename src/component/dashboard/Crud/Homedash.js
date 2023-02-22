import React from "react";
import Dashboard from "./Dashboard";
import Commandes from "./Commmandes";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
    return (
        <div>
            <Dashboard content={
                <Commandes/>
                }>
            </Dashboard>
        </div>

    )
}
export default Home;