// import { useState, useEffect } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { Header } from '../components/header';
import { Copy } from '../components/copy';

export default function Home() {
   return (
      <>
         <Head>
            <title>Pricing | inloveness photography</title>
         </Head>

         {/* Header of the page */}
         <header></header>

         {/* Main content of the page */}
         <main>
            <Header />
            <section className={styles.section}></section>
            <Copy />
            <section className={styles.section}></section>
         </main>

         {/* Footer of the page */}
         <footer></footer>
      </>
   );
}
