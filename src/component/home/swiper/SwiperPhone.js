// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Thumbs,Virtual} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';
import Card3 from '../../card/Card3';


export default function SwiperPhone() {
    const [product, setproduct] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then((res) => {
                return res.json();
            })
            .then((val) => {
                setproduct(val);
            });
    }, []);
    const params = {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          },
          className: 'my-swiper-navigation'
      };
      

    return (
        <div className='promoSwiper'>
            <h4 className='promotitle'>Phones</h4>
            <hr></hr>
            <Swiper
            {...params}
                modules={[Navigation,Thumbs,Virtual]}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                navigation
                virtual
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {product &&
                    product.filter(pro => pro.categorie === "phone").map((item, index) => (
                        <SwiperSlide virtualIndex={index}> <Card3 key={item.id} id={item.id} title={item.titre} price={item.prix} path={item.pathimg} promo={item.promo}></Card3>
                        </SwiperSlide>
                    ))}

            </Swiper>
        </div>
    );
};