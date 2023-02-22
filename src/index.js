import React from 'react';
import ReactDOM from 'react-dom/client';
import CategoryRoute from './component/CategoryRoute';
import Admin from "./component/dashboard/Admin";
import Authentication from './component/login&signup/Authentication';
import SupportRoute from './component/support/SupportRoute';
import Profile from "./component/profile/src/Profile";
import Paniers from './component/panier/src/Panier';
import Home from './component/home/Home';
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './component/store/store';
import { Provider } from 'react-redux';
// import Fallback from './component/fallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <Router>
         <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/Authen' element={<Authentication />}></Route>
            <Route exact path='/Profile' element={<Profile />}></Route>
            <Route exact path='/panier' element={<Paniers />}></Route>
            {/* <Route  path='*' element={<Fallback />}></Route> */}
         </Routes>
         <CategoryRoute />
         <SupportRoute />
         <Admin />
      </Router>
   </Provider>
);

