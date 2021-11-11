import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Cv, CvData } from '../app/cv';
import MyCvData from '../../public/resume.json';

const Home: NextPage = () => {
  const { basics }: CvData = MyCvData;

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${basics.name} - ${basics.label}`} </title>
        <meta name="description" content="My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cv data={MyCvData} />
      </main>
    </div>
  )
}

export default Home