import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Header from "../../src/common/Header";
import Pageheading from '../../src/common/Pageheading';
import Footer from '../../src/common/Footer';
import Styles from '../../styles/ProductDetails.module.scss';
import WhoAreWe from '../../src/common/WhoAreWe';
import Whowearetext from '../../src/common/Whowearetext';
import Innovative from "@/src/common/Innovative";
import ChooseUs from '../../src/common/ChooseUs';
import Statcounter from '../../src/common/Statcounter';
import Teams from "@/src/common/Teams";
import OurMission from '../../src/common/OurMission';
import Client from '../../src/common/Client';
import Form from '../../src/common/Form';
import ImageWhoweare from "@/src/common/ImageWhoweare";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  const data = [
    {
      Linkaddr:'/aboutus',
      LinkName:'About Us'
    },
  ]
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <Pageheading data={data} pagename="About Us" backgroundimg='/Pageheadingbg.png'/>
        <Whowearetext/>
        <Innovative/>
        <ChooseUs button={false} />
        <Statcounter/>
        <Teams/>
        <OurMission button={true} /> 
        <Client/>
        <Form/>
        <Footer/>
          {/* <Footer/> */}
      </main>
    </Fragment>
  );
}
