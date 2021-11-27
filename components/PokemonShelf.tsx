import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { useLocalStorage } from "utils/useLocalStorage";

import cstl from "styles/Chart.module.scss";
import pstl from "styles/PokemonSearch.module.scss";
import stl from "styles/PokemonShelf.module.scss";
import { TYPEINFO, TYPECHART, TYPES } from "models/typechart.model";

//* Generic Button
function Button({
  className,
  label,
  onClick,
  content,
}: {
  className?: string;
  label: string;
  onClick?: () => void;
  content: string;
}) {
  return (
    <span
      className={cn(stl.button, className)}
      role="button"
      aria-label={label}
      onClick={onClick}
    >
      {content}
    </span>
  );
}

type IPokemon = {
  types: TYPES[];
};

//* Single Pokemon Saved Listing
function isGoodForAtk(mod1: number, mod2: number): string {
  if (mod1 > 2 || mod2 > 2) return "⭐️";
  if (mod1 > 1 || mod2 > 1) return "👍";
  if (mod1 < 1 && mod2 < 1) return "👎";
  return "➖";
}

function isGoodForDef(mod1: number, mod2: number): string {
  const worstModifier = Math.max(mod1, mod2);
  if (worstModifier > 1) return "👎";
  if (worstModifier < 0.5) return "💀";
  if (worstModifier < 1) return "👎";
  return "➖";
}

function Pokemon({
  data,
  index,
  remove,
}: {
  data: IPokemon;
  index: number;
  remove: () => void;
}) {
  const {
    clickAtk,
    setClickAtk,
    clickDef,
    setClickDef,
    clickAtk2,
    setClickAtk2,
    clickDef2,
    setClickDef2,
  } = React.useContext(ChartContext);

  //* Calculations
  const type1 = data.types[0];
  const type2 = data.types[1];
  const TC = TYPECHART as any;

  // How would type do for attacking against set defense
  const type1ForAttack1 = (type1 && clickDef && TC?.[type1]?.[clickDef]) ?? 1;
  const type1ForAttack2 = (type1 && clickDef2 && TC?.[type1]?.[clickDef2]) ?? 1;
  const type1ForAttack = type1ForAttack1 * type1ForAttack2;
  const type2ForAttack1 = (type2 && clickDef && TC?.[type2]?.[clickDef]) ?? 1;
  const type2ForAttack2 = (type2 && clickDef2 && TC?.[type2]?.[clickDef2]) ?? 1;
  const type2ForAttack = type2ForAttack1 * type2ForAttack2;

  // How would type do as defense against set attacking
  const type1ForDef1 = (type1 && clickAtk && TC?.[clickAtk]?.[type1]) ?? 1;
  const type1ForDef2 = (type1 && clickAtk2 && TC?.[clickAtk2]?.[type1]) ?? 1;
  const type1ForDef = type1ForDef1 * type1ForDef2;
  const type2ForDef1 = (type2 && clickAtk && TC?.[clickAtk]?.[type2]) ?? 1;
  const type2ForDef2 = (type2 && clickAtk2 && TC?.[clickAtk2]?.[type2]) ?? 1;
  const type2ForDef = type2ForDef1 * type2ForDef2;

  function loadAsAtk() {
    if (type1) setClickAtk(type1);
    if (type2) setClickAtk2(type2);
  }

  function loadAsDef() {
    if (type1) setClickDef(type1);
    if (type2) setClickDef2(type2);
  }

  return (
    <div className={stl.singlePokemon}>
      <div className={stl.name}>
        #{index}
        <div
          className={cn(pstl.types, stl.types, {
            [pstl.dualDef]: data.types.length > 1,
          })}
        >
          {data.types.map((t) => (
            <Box
              key={t}
              className={cn(
                pstl.type,
                pstl.typeIcon,
                cstl.typeIcon,
                cstl.defBox,
              )}
              backgroundColor={TYPEINFO[t]?.color}
              color={TYPEINFO[t]?.font}
            >
              {t}
            </Box>
          ))}
        </div>
      </div>

      <Box className={stl.actions} justifyContent="space-between">
        <Box className={stl.actions}>
          <Button
            label="Load into Attack"
            content={`⚔️ ${isGoodForAtk(type1ForAttack, type2ForAttack)}`}
            onClick={loadAsAtk}
          />
          <Button
            label="Load into Defense"
            content={`🛡 ${isGoodForDef(type1ForDef, type2ForDef)}`}
            onClick={loadAsDef}
          />
        </Box>
        <Button label="Remove" content="🗑" onClick={remove} />
      </Box>
    </div>
  );
}

//* Pokemon Shelf
function PokemonShelf() {
  const { clickAtk, clickDef, clickAtk2, clickDef2, showShelf, setShow } =
    React.useContext(ChartContext);

  const [shelfData, setShelfData] = useLocalStorage("shelf", [] as IPokemon[]);

  function toggleShelf() {
    setShow((s) => !s);
  }

  function addToShelf(types: TYPES[]) {
    const newShelfData = [...shelfData];
    newShelfData.push({
      types,
    });
    setShelfData(newShelfData);
  }

  function saveAtkToShelf() {
    const types = [clickAtk, clickAtk2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) addToShelf(types);
  }
  function saveDefToShelf() {
    const types = [clickDef, clickDef2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) addToShelf(types);
  }
  const removeFromShelf = (index: number) => () => {
    const newShelfData = [...shelfData].filter((_, i) => i !== index);
    setShelfData(newShelfData);
  };

  return (
    <>
      <Button label="Open shelf" onClick={toggleShelf} content="🗃" />

      <div className={cn(stl.shelf, { [stl.show]: !!showShelf })}>
        <Button
          className={stl.fixed}
          label="Close"
          onClick={() => setShow(false)}
          content="❎"
        />

        <h3>Pokémon Shelf</h3>
        <div className={stl.saveButtons}>
          Add:
          <Button
            label="Save Defense Types"
            content="🛡 Defender"
            onClick={saveDefToShelf}
          />
          <Button
            label="Save Attack Types"
            content="⚔️ Attacker"
            onClick={saveAtkToShelf}
          />
        </div>

        <div className={stl.savedPokemon}>
          {shelfData.map((d, i) => (
            <Pokemon key={i} data={d} index={i} remove={removeFromShelf(i)} />
          ))}
        </div>
        {!shelfData?.length && (
          <caption>
            Save type selections from the chart here for easy re-selection.
          </caption>
        )}
      </div>
    </>
  );
}

export default PokemonShelf;
