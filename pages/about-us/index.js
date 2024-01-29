import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <React.Fragment>
         <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>About US</h2>
      </main>
    </React.Fragment>
  );
}