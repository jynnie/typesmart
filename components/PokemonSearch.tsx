import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import cstl from "styles/Chart.module.scss";
import stl from "styles/PokemonSearch.module.scss";
import { ALL_POKEMON } from "models/pokemon.model";
import { TYPEINFO } from "models/typechart.model";

function Pokemon({ p }: { p: { name: string; types: string[] } }) {
  return (
    <div className={stl.result} key={p.name}>
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
            <Pokemon key={p.name} p={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonSearch;
