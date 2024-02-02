import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Header from '../../src/common/Header';
import Pageheading from '../../src/common/Pageheading';
import Footer from '../../src/common/Footer';
import Styles from '../../styles/main.module.scss'
import Clientspage from '@/src/common/Clientspage';


export default function ourclients() {
  const data = [
    {
      Linkaddr:'/ourclients',
      LinkName:'Our Clients'
    },
    
  ] 
  return (
    <React.Fragment>
         <Head>
        <title>Clients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Pageheading data={data} pagename="Our Clients" backgroundimg='/Pageheadingbg1.png'/>
        <div className={Styles.container}>
        <Clientspage/>
        </div>
        <Footer/>
      </main>
    </React.Fragment>
  );
}