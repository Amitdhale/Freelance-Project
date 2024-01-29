import React from 'react'
import SwiperBg from './Swiper'
import Card from './Card'

import Styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={Styles.heroContainer}>
        <SwiperBg/> 
        <Card/>     
    </section>
  )
}

export default Hero