import React from "react";
import Head from "next/head";
import Box from "ui-box";
import cn from "classnames";
import { TYPES, IPokemon } from "models/typechart.model";
import { useLocalStorage } from "utils/useLocalStorage";

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
  shelfData: IPokemon[];
  setShelfData: (val: IPokemon[]) => void;
  addToShelf: (val: TYPES[]) => void;
}>(null as any);

export default function Home() {
  const [clickAtk, setClickAtk] = React.useState<TYPES | null>(null);
  const [clickAtk2, setClickAtk2] = React.useState<TYPES | null>(null);
  const [clickDef, setClickDef] = React.useState<TYPES | null>(null);
  const [clickDef2, setClickDef2] = React.useState<TYPES | null>(null);
  const [sorting, setSorting] = React.useState<"custom" | "alpha">("custom");
  const [showShelf, setShow] = React.useState<boolean>(false);

  const [shelfData, setShelfData] = useLocalStorage("shelf", [] as IPokemon[]);

  function addToShelf(types: TYPES[]) {
    const newShelfData = [...shelfData];
    newShelfData.push({
      name: `#${newShelfData.length + 1}`,
      types: types.filter((t) => !!t),
    });
    setShelfData(newShelfData);
  }

  return (
    <body>
      <Head>
        <title>Typesmart</title>
        <meta
          name="og:title"
          property="og:title"
          content="Typesmart: Interactive Pokémon Typechart"
        />
        <meta property="og:url" content="https://typesmart.vercel.app/" />
        <meta
          name="og:description"
          content="Interactive Pokémon Typechart, with type searching and dual-type support."
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jynniit" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            shelfData,
            setShelfData,
            addToShelf,
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
