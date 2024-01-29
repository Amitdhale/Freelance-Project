import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

export default function Clients() {
  return (
    <React.Fragment>
         <Head>
        <title>Clients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Our Clients</h2>
      </main>
    </React.Fragment>
  );
}