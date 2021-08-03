import React from "react";
import cn from "classnames";

import stl from "styles/Chart.module.scss";

function Cell({ value, ...props }: { value?: number; [prop: string]: any }) {
  return (
    <td {...props}>
      <div
        className={cn(stl.modifierBox, {
          [stl.advantage]: value === 2,
          [stl.disadvantage]: value === 0.5,
          [stl.immune]: value === 0,
        })}
      >
        {value === 0.5 ? "½" : value}
      </div>
    </td>
  );
}

export default Cell;
