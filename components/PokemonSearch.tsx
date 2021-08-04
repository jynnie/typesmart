import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { ChartContext } from "pages";

import cstl from "styles/Chart.module.scss";
import stl from "styles/PokemonSearch.module.scss";
import { ALL_POKEMON } from "models/pokemon.model";
import { TYPEINFO } from "models/typechart.model";

function Pokemon({
  p,
  clearSearch,
}: {
  p: { name: string; types: string[] };
  clearSearch: () => void;
}) {
  const { setClickDef, setClickDef2 } = React.useContext(ChartContext);

  const handleClick = () => {
    const primary = p.types[0];
    const secondary = p.types[1];
    if (primary) setClickDef(primary as any);
    if (secondary) setClickDef2(secondary as any);
    else setClickDef2(null);
    clearSearch();
  };

  return (
    <div
      className={stl.result}
      key={p.name}
      aria-label={`${p.name}, Type: ${p.types.join(" ")}`}
      onClick={handleClick}
    >
      <div className={stl.name}>{p.name}</div>
      <div
        className={cn(stl.types, {
          [stl.dualDef]: p.types.length > 1,
        })}
      >
        {p.types.map((t) => (
          <Box
            key={t}
            className={cn(stl.type, stl.typeIcon, cstl.typeIcon, cstl.defBox)}
            backgroundColor={(TYPEINFO as any)[t]?.color}
          >
            {t}
          </Box>
        ))}
      </div>
    </div>
  );
}

function PokemonSearch() {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const allPokemon = ALL_POKEMON;
  function clearSearch() {
    setSearchValue("");
  }

  const matchingPokemon =
    (!!searchValue &&
      allPokemon.filter((p) =>
        p.name.toLowerCase().includes(searchValue.toLowerCase()),
      )) ||
    null;

  return (
    <div className={stl.container}>
      <div className={stl.search}>
        <Input
          placeholder="Search Pokémon..."
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          allowClear
        />
      </div>
      {!!matchingPokemon && (
        <div className={stl.results}>
          {matchingPokemon.map((p) => (
            <Pokemon key={p.name} {...{ p, clearSearch }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;
