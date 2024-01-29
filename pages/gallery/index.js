import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

export default function Gallery() {
  return (
    <React.Fragment>
         <Head>
        <title>Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Gallery</h2>
      </main>
    </React.Fragment>
  );
}