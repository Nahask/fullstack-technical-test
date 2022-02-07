import React from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SearchComponent } from "components/search";
import { HeaderComponent } from 'components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css" />
      </Head>

      <main className={styles.main}>
        <HeaderComponent />
        <SearchComponent />
      </main>
    </div>
  );
}
