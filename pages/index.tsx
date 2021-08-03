import React from "react";
import Head from "next/head";
import Box from "ui-box";
import { TYPES } from "models/typechart.model";

import Chart from "components/Chart";
import SelectedMeta from "components/SelectedMeta";

import styles from "../styles/Home.module.css";

export const ChartContext = React.createContext<{
  clickAtk: TYPES | null;
  clickDef: TYPES | null;
  setClickAtk: (val: TYPES | null) => void;
  setClickDef: (val: TYPES | null) => void;
}>(null as any);

export default function Home() {
  const [clickAtk, setClickAtk] = React.useState<TYPES | null>(null);
  const [clickDef, setClickDef] = React.useState<TYPES | null>(null);

  return (
    <body className="light">
      <Head>
        <title>Typesmart</title>
        <meta name="description" content="Pokémon Typechart tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Typesmart</h1>
        <ChartContext.Provider
          value={{ clickAtk, setClickAtk, clickDef, setClickDef }}
        >
          <SelectedMeta />
          <Chart />
        </ChartContext.Provider>
      </main>

      <footer className={styles.footer}>
        <Box is="span" marginRight=".24rem">
          Made with {"<3"} by{" "}
        </Box>
        <a href="https://github.com/jynnie/typesmart">jynnie</a>
      </footer>
    </body>
  );
}
