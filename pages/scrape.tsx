import React from "react";
import Head from "next/head";
import Box from "ui-box";
import _ from "lodash";

import styles from "../styles/Home.module.css";

interface PokemonData {
  name: string;
  url: string;
  types?: string[];
  isDefault?: boolean;
}

export default function TypeScraper() {
  const [progress, setProgress] = React.useState<number>(0);

  const allPokemonRef = React.useRef<PokemonData[]>([]);
  function setAllPokemon(value: PokemonData[]) {
    allPokemonRef.current = value;
  }

  async function getPokemonData(
    url: string,
    ref: React.MutableRefObject<PokemonData[]>,
  ) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const isDefaultVer = !!data.is_default;
        const types = Object.values(data.types || []).map(
          (type: any) => type.type.name,
        );
        const pokemon = ref.current.find((f) => f.url === url);
        if (pokemon) {
          pokemon.types = types;
          pokemon.isDefault = isDefaultVer;
        }
        setProgress((p) => p + 1);
      });
  }

  function scrapeData() {
    setProgress(0);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
      .then((res) => res.json())
      .then((data) => {
        const basePokemon = (data.results as PokemonData[]).filter(
          (p) => !/(mega|gmax)/gi.test(p.name),
        );
        basePokemon.forEach((p) => getPokemonData(p.url, allPokemonRef));
        setAllPokemon(basePokemon);
      });
  }

  const finishedScraping =
    progress > 0 && progress === allPokemonRef.current?.length;

  const returnValue = allPokemonRef.current
    .filter((p) => {
      if (p.isDefault) return true;
      else {
        const firstName = p.name.split("-")[0];
        const defaultPokemon = allPokemonRef.current.find(
          (p) => firstName === p.name,
        );
        if (!defaultPokemon) return true;
        return !_.isEqual(defaultPokemon.types, p.types);
      }
      return true;
    })
    .map((p) => ({ name: p.name, types: p.types }));

  return (
    <body>
      <Head>
        <title>Type Scraping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Typesmart</h1>
        {progress === allPokemonRef.current?.length && (
          <button onClick={scrapeData}>Start Scrape</button>
        )}
        {progress > 0 && !finishedScraping && (
          <div>
            Scraped {progress}/{allPokemonRef.current?.length || "x"}
          </div>
        )}
        {finishedScraping && (
          <>
            <h3>Results</h3>
            <textarea
              value={JSON.stringify(returnValue)}
              style={{ width: "calc(100vw - 24px)", fontSize: "12px" }}
            />
          </>
        )}
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
