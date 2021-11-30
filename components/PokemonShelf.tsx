import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { useLocalStorage } from "utils/useLocalStorage";

import cstl from "styles/Chart.module.scss";
import pstl from "styles/PokemonSearch.module.scss";
import stl from "styles/PokemonShelf.module.scss";
import { TYPEINFO, TYPECHART, TYPES, IPokemon } from "models/typechart.model";

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

type CalcTypes = {
  calcAtk?: TYPES | null;
  calcAtk2?: TYPES | null;
  calcDef?: TYPES | null;
  calcDef2?: TYPES | null;
};

//* Single Pokemon Saved Listing
function isGoodForAtk(mod1: number, mod2?: number): string {
  // We take our highest modifier against the enemy
  const mods = [mod1, mod2].filter((k) => k !== undefined) as number[];
  const bestModifier = Math.max(...mods);

  if (bestModifier === 4) return "💖";
  if (bestModifier === 2) return "👍";
  if (bestModifier === 0.5) return "❌";
  if (bestModifier === 0.25) return "❌";
  if (bestModifier === 0) return "💀";
  return "–";
}

function isGoodForDef(mod1: number, mod2?: number): string {
  // We take their highest modifier against us
  const mods = [mod1, mod2].filter((k) => k !== undefined) as number[];
  const worstModifier = Math.max(...mods);

  if (worstModifier === 4) return "💀";
  if (worstModifier === 2) return "❌";
  if (worstModifier < 1) return "👍";
  return "–";
}

function Pokemon({
  data,
  index,
  remove,
  changeName,
  calcTypes,
}: {
  data: IPokemon;
  index: number;
  remove: () => void;
  changeName: (value: string) => void;
  calcTypes: CalcTypes;
}) {
  const {
    setClickAtk,
    setClickDef,
    setClickAtk2,
    setClickDef2,
  } = React.useContext(ChartContext);
  const { calcAtk, calcAtk2, calcDef, calcDef2 } = calcTypes;

  //* Calculations
  const type1 = data.types[0];
  const type2 = data.types[1];
  const TC = TYPECHART;

  // How would type do for attacking against set defense
  const type1ForAttack1 = (type1 && calcDef && TC?.[type1]?.[calcDef]) ?? 1;
  const type1ForAttack2 = (type1 && calcDef2 && TC?.[type1]?.[calcDef2]) ?? 1;
  const type1ForAttack = type1ForAttack1 * type1ForAttack2; // Average effect of type1 attack
  const type2ForAttack1 = (type2 && calcDef && TC?.[type2]?.[calcDef]) ?? 1;
  const type2ForAttack2 = (type2 && calcDef2 && TC?.[type2]?.[calcDef2]) ?? 1;
  const type2ForAttack = !!type2
    ? type2ForAttack1 * type2ForAttack2
    : undefined; // Average effect of type2 attack

  // How would type do as defense against set attacking
  const their1VSOur1 = (type1 && calcAtk && TC?.[calcAtk]?.[type1]) ?? 1;
  const their1VSOur2 = (type2 && calcAtk && TC?.[calcAtk]?.[type2]) ?? 1;
  const their1VSOurs = their1VSOur1 * their1VSOur2;
  const their2VSOur1 = (type1 && calcAtk2 && TC?.[calcAtk2]?.[type1]) ?? 1;
  const their2VSOur2 = (type2 && calcAtk2 && TC?.[calcAtk2]?.[type2]) ?? 1;
  const their2VSOurs = !!calcAtk2 ? their2VSOur1 * their2VSOur2 : undefined;

  function loadAsAtk() {
    setClickAtk(type1);
    setClickAtk2(type2 || null);
  }

  function loadAsDef() {
    setClickDef(type1);
    setClickDef2(type2 || null);
  }

  return (
    <div className={stl.singlePokemon}>
      <div className={stl.nameContainer}>
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
        <input
          className={stl.name}
          value={data.name}
          onChange={(e) => changeName(e.target.value)}
          type="text"
          maxLength={12}
        />
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
            content={`🛡 ${isGoodForDef(their1VSOurs, their2VSOurs)}`}
            onClick={loadAsDef}
          />
        </Box>
        <Button label="Remove" content="🗑" onClick={remove} />
      </Box>
    </div>
  );
}

//* Pokemon Shelf
enum AGAINST {
  mix = "mix",
  atk = "atk",
  def = "def",
}
function PokemonShelf() {
  const {
    clickAtk,
    clickDef,
    clickAtk2,
    clickDef2,
    showShelf,
    setShow,
    shelfData,
    setShelfData,
    addToShelf,
  } = React.useContext(ChartContext);

  //* Create the Types to Calculate Against
  // Choose which type we're calculating the recommendations
  // to put in as attack or defender are against. If mix, looks
  // at the opposite type in the chart. Otherwise, all against
  // the attacker or defender.
  const [recommend, setRecommend] = useLocalStorage(
    "recommendAgainst",
    AGAINST.def,
  );
  const calcTypes: CalcTypes = {};
  if (recommend === AGAINST.mix) {
    calcTypes.calcAtk = clickAtk;
    calcTypes.calcAtk2 = clickAtk2;
    calcTypes.calcDef = clickDef;
    calcTypes.calcDef2 = clickDef2;
  } else if (recommend === AGAINST.atk) {
    calcTypes.calcAtk = clickAtk;
    calcTypes.calcAtk2 = clickAtk2;
    calcTypes.calcDef = clickAtk;
    calcTypes.calcDef2 = clickAtk2;
  } else if (recommend === AGAINST.def) {
    calcTypes.calcAtk = clickDef;
    calcTypes.calcAtk2 = clickDef2;
    calcTypes.calcDef = clickDef;
    calcTypes.calcDef2 = clickDef2;
  }

  function toggleShelf() {
    setShow((s) => !s);
  }

  function saveAtkToShelf() {
    const types = [clickAtk, clickAtk2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) addToShelf(types);
  }
  function saveDefToShelf() {
    const types = [clickDef, clickDef2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) addToShelf(types);
  }

  const editNameOfPokemon = (index: number) => (newName: string) => {
    const newShelfData = [...shelfData];
    newShelfData[index].name = newName;
    setShelfData(newShelfData);
  };

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
          <Box is="span" flexGrow={1}>
            Add:
          </Box>
          <Button
            label="Save Attack Types"
            content="⚔️ Attack"
            onClick={saveAtkToShelf}
          />
          <Button
            label="Save Defense Types"
            content="🛡 Defense"
            onClick={saveDefToShelf}
          />
        </div>
        <div className={stl.saveButtons}>
          <Box is="span" flexGrow={1}>
            Against:
          </Box>
          <Button
            className={cn({ [stl.selected]: recommend === AGAINST.def })}
            label="Defense Types"
            content="🛡"
            onClick={() => setRecommend(AGAINST.def)}
          />
          <Button
            className={cn({ [stl.selected]: recommend === AGAINST.atk })}
            label="Attack Types"
            content="⚔️"
            onClick={() => setRecommend(AGAINST.atk)}
          />
          <Button
            className={cn({ [stl.selected]: recommend === AGAINST.mix })}
            label="Mix"
            content="🥗"
            onClick={() => setRecommend(AGAINST.mix)}
          />
        </div>

        <div className={stl.savedPokemon}>
          {shelfData.map((d, i) => (
            <Pokemon
              key={i}
              data={d}
              index={i}
              remove={removeFromShelf(i)}
              changeName={editNameOfPokemon(i)}
              calcTypes={calcTypes}
            />
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
