
import IMages from "./btn/btn";
import Slider from "./Slider/slider";
import "./App.css"
import NavBar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import Acontenaire from "../contenaire/src/Acontenaire";
import PromoSwiper from "./swiper/Swiper";
import SwiperPc from "./swiper/SwiperPc";
import SwiperPhone from "./swiper/SwiperPhone";
import SwiperTablet from "./swiper/SwiperTablet";
import SwiperAccessoire from "./swiper/SwiperAccessoire";


function App(){
    return(
        <div className="body_home_app">
            <NavBar/>
            <div className="home_app">
            <Slider/>
            <IMages/>
            <PromoSwiper/>
            <SwiperPc></SwiperPc>
            <SwiperPhone></SwiperPhone>
            <SwiperTablet></SwiperTablet>
            <SwiperAccessoire></SwiperAccessoire>
            <Acontenaire/>
            </div>
            <Footer/>
        </div>
    )
}
export default App;