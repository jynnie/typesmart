import React from "react";
import cn from "classnames";
import { TYPECHART } from "models/typechart.model";
import { ChartContext } from "pages";

import AttackDisplay from "components/AttackDisplay";
import stl from "styles/Meta.module.scss";

function SwapButton({ onClick }: { onClick: () => void }) {
  return (
    <span
      className={stl.button}
      role="button"
      aria-label="Swap type(s)"
      onClick={onClick}
    >
      🔄
    </span>
  );
}

function SwordIcon() {
  return <span className={stl.type}>⚔️</span>;
}

//* Main Component
function SelectedMeta() {
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

  if (!clickAtk && !clickDef) {
    return (
      <div className={cn(stl.container, stl.empty)}>
        No types selected. Click on the chart below to start.
      </div>
    );
  }

  function clearClicked() {
    setClickAtk(null);
    setClickDef(null);
    setClickAtk2(null);
    setClickDef2(null);
  }

  function swapTypes() {
    const oldAtk = clickAtk;
    const oldDef = clickDef;
    const oldAtk2 = clickAtk2;
    const oldDef2 = clickDef2;
    setClickAtk(oldDef);
    setClickDef(oldAtk);
    setClickAtk2(oldDef2);
    setClickDef2(oldAtk2);
  }

  //* Calculations
  const modifier11 =
    (clickAtk && clickDef && TYPECHART?.[clickAtk]?.[clickDef]) ?? 1;
  const modifier21 =
    (clickAtk && clickDef2 && TYPECHART?.[clickAtk]?.[clickDef2]) ?? 1;
  const modifier1 = modifier11 * modifier21;
  const modifier12 =
    (clickAtk2 && clickDef && TYPECHART?.[clickAtk2]?.[clickDef]) ?? 1;
  const modifier22 =
    (clickAtk2 && clickDef2 && TYPECHART?.[clickAtk2]?.[clickDef2]) ?? 1;
  const modifier2 = modifier12 * modifier22;

  const attackTypes = [
    { atk: clickAtk, mod: modifier1 },
    { atk: clickAtk2, mod: modifier2 },
  ];

  //* Render
  return (
    <div className={stl.container}>
      <div className={stl.rightBox}>
        {(!!clickAtk || !!clickDef) && <SwapButton onClick={swapTypes} />}

        {!!clickAtk && <SwordIcon />}
        <div className={stl.attacking}>
          {attackTypes.map((set, i) => (
            <AttackDisplay key={i} atk={set.atk} mod={set.mod} def={clickDef} />
          ))}
        </div>

        {!!clickDef && (
          <span className={stl.type}>
            🛡{clickDef} {clickDef2}
          </span>
        )}
      </div>

      <div className={stl.button} onClick={clearClicked} role="button">
        Clear
      </div>
    </div>
  );
}

export default SelectedMeta;
