import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { TYPEORDER, TYPECHART, TYPEINFO, TYPES } from "models/typechart.model";

import stl from "styles/Meta.module.scss";
import { ChartContext } from "pages";

function SelectedMeta() {
  const { clickAtk, setClickAtk, clickDef, setClickDef } = React.useContext(
    ChartContext,
  );

  if (!clickAtk && !clickDef) {
    return (
      <div className={cn(stl.container, stl.empty)}>
        No types selected. Click on the chart below.
      </div>
    );
  }

  function clearClicked() {
    setClickAtk(null);
    setClickDef(null);
  }

  function swapTypes() {
    const oldAtk = clickAtk;
    const oldDef = clickDef;
    setClickAtk(oldDef);
    setClickDef(oldAtk);
  }

  const modifier =
    (clickAtk && clickDef && TYPECHART?.[clickAtk]?.[clickDef]) ?? 1;
  const displayModifier = modifier === 0.5 ? "½" : modifier;

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
        {!!clickAtk && <span className={stl.type}>⚔️{clickAtk}</span>}
        {!!clickAtk && !!clickDef && (
          <span
            className={cn({
              [stl.advantage]: modifier === 2,
              [stl.disadvantage]: modifier === 0.5,
              [stl.immune]: modifier === 0,
            })}
          >
            {" "}
            -({displayModifier}x)→{" "}
          </span>
        )}
        {!!clickDef && <span className={stl.type}>🛡{clickDef}</span>}
      </div>
      <div className={stl.button} onClick={clearClicked} role="button">
        Clear
      </div>
    </div>
  );
}

export default SelectedMeta;
