import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Header from '../../src/common/Header';
import Pageheading from '../../src/common/Pageheading';
import Footer from '../../src/common/Footer';
import ProductIntro from '../../src/common/ProductIntro'
import Productnav from '../../src/common/Productnav'
import ProductDes from '../../src/common/ProductDes'
import Styles from '../../styles/ProductDetails.module.scss'
import Extraproduct from '@/src/common/Extraproduct';
 

export default function Product() {
  const data = [
    {
      Linkaddr:'/products',
      LinkName:'Product'
    },
    {
      Linkaddr:'/product',
      LinkName:'Product Detail'
    },
  ] 
  return (
    <React.Fragment>
         <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Pageheading data={data} pagename="Product" backgroundimg='/Pageheadingbg.png'/>
        <div  className={Styles.container}>
          <ProductIntro/>
          <Productnav/>
          <ProductDes/>
          <Extraproduct/>
        </div>
          <Footer/>
      </main>
    </React.Fragment>
  );
}