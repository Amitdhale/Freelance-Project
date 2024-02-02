import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import Header from '../src/common/Header'
import Card from '../src/common/Card'
import WhoAreWe from '../src/common/WhoAreWe'
import Product from '../src/common/Product'
import ChooseUs from '../src/common/ChooseUs'
import Statcounter from '../src/common/Statcounter'
import OurMission from '../src/common/OurMission'
import Client from '../src/common/Client'
import Form from '../src/common/Form'
import Footer from '../src/common/Footer'
import Hero from "../src/common/Hero";
import SwiperBg from "../src/common/Swiper";




export default function Home() {
  return (
    <div >
      <Head>
        <title>Pharmaceutical & Chemical Machinery Manufacturers in India</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Hero/>
        <WhoAreWe/>
        <Product/>
        <ChooseUs button={true} />{/*  button true/false to show or hide the button */}
        <Statcounter/>
        <OurMission button={true} /> 
        <Client/>
        <Form/>
        <Footer/>
      </main>

    </div>
  );
}
