import React from 'react'
import Styles from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image'


import slide1 from "../../public/Introduction.png";
import slide2 from "../../public/Introduction.png";
import slide3 from "../../public/Introduction.png";
import slide4 from "../../public/Introduction.png";



function SwiperBg() {

    const data = [slide1, slide2, slide3, slide4]


  return (
     <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation
        loop
        speed={2500}
        autoplay={{
            delay:1000,
 
        }}
        draggable
        className={Styles.swiper}
     >
        {data.map((slide) => <SwiperSlide><Image className={Styles.img} src={slide} alt="" /></SwiperSlide>)}
     </Swiper>
  )
}

export default SwiperBg