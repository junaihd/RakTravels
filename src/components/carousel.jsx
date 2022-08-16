import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, Scrollbar, Autoplay } from 'swiper';
import fare from './images/fare.jpeg';
import airindia from './images/airindia.jpeg';
import maldives from './images/maldives.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Carousel() {
  return (
    <section className="carousel">
        <div className="carousel_header">
            <h2 className="carousel_head">PLACE AND PACKAGES</h2>
        </div>
          <Swiper
        modules={[ Navigation, Pagination, Scrollbar, EffectFade, Autoplay ]}
        slidesPerView={1}
        navigation
        autoplay={true}
        effect={'fade'}
        speed={500}
        pagination={{ clickable: true }}
        loop
        className='swiper'
        >
          <SwiperSlide className='swiper_slide'><img src={maldives} alt="" className="slider_img" /></SwiperSlide>
          <SwiperSlide className='swiper_slide'><img src={fare} alt="" className="slider_img" /></SwiperSlide>
          <SwiperSlide className='swiper_slide'><img src={airindia} alt="" className="slider_img" /></SwiperSlide>
        </Swiper>
        
    </section>
  )
}

export default Carousel;
