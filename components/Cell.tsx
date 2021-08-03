import React from "react";
import cn from "classnames";

import stl from "styles/Chart.module.scss";
import { getDisplay } from "./AttackDisplay";

function Cell({ value, ...props }: { value?: number; [prop: string]: any }) {
  return (
    <td {...props}>
      <div
        className={cn(stl.modifierBox, {
          [stl.advantage]: value && value >= 2,
          [stl.disadvantage]: value && value <= 0.5,
          [stl.immune]: value === 0,
          [stl.super]: value === 4 || value === 0.25,
        })}
      >
        {typeof value === "number" ? getDisplay(value) : null}
      </div>
    </td>
  );
}

export default Cell;
