import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Header from "../../src/common/Header";

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header> </Header>
    </Fragment>
  );
}
