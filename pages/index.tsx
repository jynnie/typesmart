import React from "react";
import Head from "next/head";
import Box from "ui-box";
import cn from "classnames";
import { TYPES } from "models/typechart.model";

import Chart from "components/Chart";
import SelectedMeta from "components/Meta";
import PokemonSearch from "components/PokemonSearch";

import styles from "../styles/Home.module.css";

export const ChartContext = React.createContext<{
  clickAtk: TYPES | null;
  clickDef: TYPES | null;
  clickAtk2: TYPES | null;
  clickDef2: TYPES | null;
  sorting: "custom" | "alpha";
  setClickAtk: (val: TYPES | null) => void;
  setClickDef: (val: TYPES | null) => void;
  setClickAtk2: (val: TYPES | null) => void;
  setClickDef2: (val: TYPES | null) => void;
  setSorting: (val: "custom" | "alpha") => void;
  showShelf: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}>(null as any);

export default function Home() {
  const [clickAtk, setClickAtk] = React.useState<TYPES | null>(null);
  const [clickAtk2, setClickAtk2] = React.useState<TYPES | null>(null);
  const [clickDef, setClickDef] = React.useState<TYPES | null>(null);
  const [clickDef2, setClickDef2] = React.useState<TYPES | null>(null);
  const [sorting, setSorting] = React.useState<"custom" | "alpha">("custom");
  const [showShelf, setShow] = React.useState<boolean>(false);

  return (
    <body>
      <Head>
        <title>Typesmart</title>
        <meta name="description" content="Pokémon Typechart tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={cn(styles.main, { [styles.showingShelf]: showShelf })}>
        <h1 className={styles.title}>Typesmart</h1>
        <ChartContext.Provider
          value={{
            clickAtk,
            setClickAtk,
            clickDef,
            setClickDef,
            clickAtk2,
            setClickAtk2,
            clickDef2,
            setClickDef2,
            sorting,
            setSorting,
            showShelf,
            setShow,
          }}
        >
          <SelectedMeta />
          <Chart />
          <PokemonSearch />
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
