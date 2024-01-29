import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

export default function Product() {
  return (
    <React.Fragment>
         <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Product</h2>
      </main>
    </React.Fragment>
  );
}