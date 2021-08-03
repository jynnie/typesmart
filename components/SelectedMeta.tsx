import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { TYPECHART } from "models/typechart.model";

import stl from "styles/Meta.module.scss";
import { ChartContext } from "pages";

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

  function getDisplay(modifier: number) {
    return modifier === 0.5 ? "½" : modifier === 0.25 ? "¼" : modifier;
  }

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

  return (
    <div className={stl.container}>
      <div className={stl.rightBox}>
        {(!!clickAtk || !!clickDef) && (
          <span
            className={stl.button}
            role="button"
            aria-label="Swap type(s)"
            onClick={swapTypes}
          >
            🔄
          </span>
        )}

        {!!clickAtk && <span className={stl.type}>⚔️</span>}
        <div className={stl.attacking}>
          {[
            { a: clickAtk, m: modifier1 },
            { a: clickAtk2, m: modifier2 },
          ].map((set, i) => (
            <div key={i}>
              {!!set.a && <span className={stl.type}>{set.a}</span>}
              {!!set.a && !!clickDef && (
                <span
                  className={cn({
                    [stl.advantage]: set.m >= 2,
                    [stl.disadvantage]: set.m <= 0.5,
                    [stl.immune]: set.m === 0,
                    [stl.super]: set.m === 4 || set.m === 0.25,
                  })}
                >
                  {" "}
                  -({getDisplay(set.m)}x)→{" "}
                </span>
              )}
            </div>
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
