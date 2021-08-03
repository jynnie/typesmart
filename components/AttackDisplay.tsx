import React from "react";
import cn from "classnames";
import { TYPES } from "models/typechart.model";

import stl from "styles/Meta.module.scss";

export function getDisplay(modifier: number) {
  return modifier === 0.5 ? "½" : modifier === 0.25 ? "¼" : modifier;
}

function AttackDisplay({
  atk,
  mod,
  def,
}: {
  atk: TYPES | null;
  mod: number;
  def: TYPES | null;
}) {
  if (!atk) return null;

  return (
    <div>
      <span key="attack" className={stl.type}>
        {atk}
      </span>
      {!!def && (
        <span
          key="modifier"
          className={cn({
            [stl.advantage]: mod >= 2,
            [stl.disadvantage]: mod <= 0.5,
            [stl.immune]: mod === 0,
            [stl.super]: mod === 4 || mod === 0.25,
          })}
        >
          {" "}
          -({getDisplay(mod)}x)→{" "}
        </span>
      )}
    </div>
  );
}

export default AttackDisplay;
