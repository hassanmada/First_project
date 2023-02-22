import React from 'react';
import { Route, Routes } from "react-router-dom";
import Addp from "./Crud/AddP";
import Editep from "./Crud/EditeP";
import Produits from './Crud/Produits';
import Home from "./Crud/Homedash";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Support from './Crud/Support';
import EditeSupport from './Crud/EditeSupport';
import AddSupport from './Crud/AddSupport';



function Admin() {
  return (
    <div>
      <Routes>
        <Route exact path="/admin" element={<Home />}></Route>
        <Route exact path='/admin/produits' element={<Produits />}> </Route>
        <Route exact path='/admin/produits/Addproduit' element={<Addp />}> </Route>
        <Route exact path='/admin/Editeproduit/:id' element={<Editep />}> </Route>
        <Route exact path='/admin/support' element={<Support />}> </Route>
        <Route exact path='/admin/support/EditeSupport/:id' element={<EditeSupport />}> </Route>
        <Route exact path='/admin/support/AddSupport' element={<AddSupport />}> </Route>
      </Routes>

    </div>
  )
}
export default Admin;