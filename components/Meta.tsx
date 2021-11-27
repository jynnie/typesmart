import React from "react";
import cn from "classnames";
import { TYPECHART, TYPES } from "models/typechart.model";
import { ChartContext } from "pages";
import { Tooltip } from "antd";

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

function SwordIcon({ onClick }: { onClick: () => void }) {
  return <span className={cn(stl.type, stl.sword)} onClick={onClick} />;
}

function ShieldIcon({ onClick }: { onClick: () => void }) {
  return <span className={cn(stl.type, stl.shield)} onClick={onClick} />;
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
    sorting,
    setSorting,
    addToShelf,
    setShow,
  } = React.useContext(ChartContext);

  const hasSelection = !!clickAtk || !!clickDef;

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

  function toggleSorting() {
    if (sorting === "custom") setSorting("alpha");
    else setSorting("custom");
  }

  function saveAtk() {
    const types = [clickAtk, clickAtk2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) {
      addToShelf(types);
      setShow(true);
    }
  }
  function saveDef() {
    const types = [clickDef, clickDef2].filter((k) => !!k) as TYPES[];
    if (types.length > 0) {
      addToShelf(types);
      setShow(true);
    }
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
      {!!hasSelection ? (
        <div className={stl.miniContainer}>
          {(!!clickAtk || !!clickDef) && <SwapButton onClick={swapTypes} />}

          {!!clickAtk && <SwordIcon onClick={saveAtk} />}
          <div className={stl.attacking}>
            {attackTypes.map((set, i) => (
              <AttackDisplay
                key={i}
                atk={set.atk}
                mod={set.mod}
                def={clickDef}
              />
            ))}
          </div>

          {!!clickDef && (
            <>
              <ShieldIcon onClick={saveDef} />
              <span className={stl.type}>
                {clickDef} {clickDef2}
              </span>
            </>
          )}
        </div>
      ) : (
        <div className={stl.empty}>
          No types selected. Click on the chart below to start.
        </div>
      )}

      <div className={stl.miniContainer}>
        {!!hasSelection && !clickDef2 && !clickAtk2 && (
          <Tooltip
            title={`${
              /(Mac)/i.test(navigator.userAgent) ? "⌘" : "Ctrl"
            }+Click to select a second type.`}
            placement="left"
          >
            ℹ️
          </Tooltip>
        )}
        <div className={stl.button} onClick={toggleSorting} role="button">
          Sort
        </div>
        {!!hasSelection && (
          <div className={stl.button} onClick={clearClicked} role="button">
            Clear
          </div>
        )}
      </div>
    </div>
  );
}

export default SelectedMeta;
