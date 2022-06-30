import './Carousel.css';

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const Carousel = ({img1,img2,img3}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={ {delay: 3000} }
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='carrouselSwp'><img className='carrouselImg' src={img1} alt='banner promocional' /></SwiperSlide>
      <SwiperSlide className='carrouselSwp'><img className='carrouselImg' src={img2} alt='banner promocional' /></SwiperSlide>
      <SwiperSlide className='carrouselSwp'><img className='carrouselImg' src={img3} alt='banner promocional' /></SwiperSlide>

    </Swiper>
  );
}
export default Carousel;
