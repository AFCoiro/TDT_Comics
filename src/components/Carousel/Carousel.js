//importa de swiper para hacer carousel
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
//importa de react/react-router-dom
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
//importa de component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Carousel = ({img1,img2,img3,page1,page2,page3}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={1}
      navigation={true}
      autoplay={ {delay: 8000} }
      pagination={{ clickable: true}}
      scrollbar={{ draggable: true }}
    >
      {/* tres sliders para el banner de publicidad con links designados para cada categoria de editorial */}
      <SwiperSlide className='carrouselSwp'> 
      <Link to={`/products/${page1}`}>
        <img className='carrouselImg'
             src={img1} 
             alt='banner promocional' />
        </Link>
        </SwiperSlide>
      <SwiperSlide className='carrouselSwp'> 
      <Link to={`/products/${page2}`}>
        <img className='carrouselImg'
             src={img2} 
             alt='banner promocional' />
        </Link>
        </SwiperSlide>
      <SwiperSlide className='carrouselSwp'> 
      <Link to={`/products/${page3}`}>
        <img className='carrouselImg'
             src={img3} 
             alt='banner promocional' />
        </Link>
        </SwiperSlide>

    </Swiper>
  );
}
export default Carousel;
