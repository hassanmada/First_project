import { Routes, Route} from "react-router-dom";
import Filter from "./filter/Filter";
import Filted from "./filter/Filted";
import Product from "./product/Product";
function Category(){

    return(
            <div>
            <Routes>
                <Route exact path="/category/:name" element={<Filter/>}></Route>
                <Route exact path="/category/:name/filter/:brand/:mini/:maxi" element={<Filted/>}></Route>
                <Route exact path="/product/:id" element={<Product/>}></Route>
            </Routes>

            </div>
 
    )
}
export default Category;