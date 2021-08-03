import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { TYPEORDER, TYPECHART, TYPEINFO } from "models/typechart.model";

import stl from "styles/Chart.module.scss";

function Cell({ value }: { value?: number }) {
  return (
    <td>
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

function Chart() {
  const [defenseOrder] = React.useState<typeof TYPEORDER>(TYPEORDER);

  return (
    <table className={stl.table}>
      <thead>
        <tr>
          <th>def→</th>
          {defenseOrder.map((defType) => (
            <th key={defType}>
              <Box
                className={cn(stl.typeIcon, stl.defBox)}
                backgroundColor={TYPEINFO[defType].color}
              >
                {defType.slice(0, 3)}
              </Box>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TYPEORDER.map((atkType) => (
          <tr key={atkType}>
            <td>
              <Box
                className={cn(stl.typeIcon, stl.atkBox)}
                backgroundColor={TYPEINFO[atkType].color}
              >
                {atkType}
              </Box>
            </td>
            {defenseOrder.map((defType) => (
              <Cell key={defType} value={TYPECHART?.[atkType]?.[defType]} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Chart;
