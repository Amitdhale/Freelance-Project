import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Header from '../../src/common/Header';
import Pageheading from '../../src/common/Pageheading';
import Galleryimages from '../../src/common/Galleryimages';
import Footer from '../../src/common/Footer';

export default function Gallery() {
  const data = [
    {
      Linkaddr:'/gallery',
      LinkName:'Gallery',
    },
  ] 
  return (
    <React.Fragment>
         <Head>
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Pageheading data={data} pagename="Gallery" backgroundimg='/Pageheadingbg1.png'/>
        <Galleryimages/>
        <Footer/>
      </main>
    </React.Fragment>
  );
}