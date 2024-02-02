import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Header from '../../src/common/Header';
import Pageheading from '../../src/common/Pageheading';
import Footer from '../../src/common/Footer';
import Styles from '../../styles/ProductDetails.module.scss'
import Contactuspage from "@/src/common/Contactuspage";


const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  const data = [
    {
      Linkaddr:'/contactus',
      LinkName:'Contact Us'
    },
  ] 
  return (
    <Fragment>
      <Head>
        <title>Contact Us </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Pageheading data={data} pagename="Contact Us" backgroundimg='/Pageheadingbg1.png'/>
        <div  className={Styles.container}>
          <Contactuspage/>
        </div>
          <Footer/>
      </main>
    </Fragment>
  );
}
