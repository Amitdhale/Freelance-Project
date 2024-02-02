import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { Fragment } from "react";
import Header from "../../src/common/Header";
import Pageheading from '../../src/common/Pageheading';
import Productpagecard from '../../src/common/Productpagecards';
import Footer from '../../src/common/Footer';
import Styles from '../../styles/main.module.scss'


const inter = Inter({ subsets: ["latin"] });

export default function Products() {
  const data = [
    {
      Linkaddr:'/products',
      LinkName:'Products'
    },
  ] 
  return (
    <Fragment>
      <Head>
        <title>Products Page</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header/>
        <Pageheading data={data} pagename="Products" backgroundimg='/Pageheadingbg.png'/>
        <div  className={Styles.container}>
          <Productpagecard/>
          
        </div>
        <Footer/>
      </main>
    </Fragment>
  );
}
