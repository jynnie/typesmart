import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { TYPEORDER, TYPEINFO, TYPECHART, TYPES } from "models/typechart.model";

import Cell from "components/Cell";

import stl from "styles/Chart.module.scss";

//* Main Chart Component
function DualDefenseChart({
  highlightAtk,
  typeOrder,
  clearHovered,
  setHover,
  setClick,
}: {
  highlightAtk: TYPES | null;
  typeOrder: typeof TYPEORDER;
  clearHovered: () => void;
  setHover: (atk: TYPES | null, def: TYPES | null) => void;
  setClick: (atk: TYPES, def: TYPES | null) => (evt: MouseEvent) => void;
}) {
  const { clickAtk, clickDef, clickAtk2, clickDef2 } = React.useContext(
    ChartContext,
  );

  const [hovering, setHovering] = React.useState<boolean>(false);

  const hasClicked = !!clickAtk || !!clickDef;

  if (!clickDef || !clickDef2) return null;

  //* Render
  return (
    <table
      className={cn(stl.table)}
      onMouseLeave={() => {
        clearHovered();
        setHovering(true);
      }}
      onMouseEnter={() => setHovering(true)}
    >
      <thead>
        <tr>
          <th>
            <Box className={stl.dualDef}>
              <Box
                className={cn(stl.typeIcon, stl.defBox)}
                backgroundColor={TYPEINFO[clickDef].color}
                color={TYPEINFO[clickDef].font}
              >
                {clickDef.slice(0, 3)}
              </Box>
              <Box
                className={cn(stl.typeIcon, stl.defBox)}
                backgroundColor={TYPEINFO[clickDef2].color}
                color={TYPEINFO[clickDef2].font}
              >
                {clickDef2.slice(0, 3)}
              </Box>
            </Box>
          </th>
        </tr>
      </thead>

      <tbody>
        {typeOrder.map((atkType) => {
          const matchAtk = highlightAtk === atkType || clickAtk2 === atkType;
          const matchDef = true;
          const modifier1 = (clickDef && TYPECHART?.[atkType]?.[clickDef]) ?? 1;
          const modifier2 =
            (clickDef2 && TYPECHART?.[atkType]?.[clickDef2]) ?? 1;
          const modifier = modifier1 * modifier2;

          return (
            <tr key={atkType}>
              <Cell
                value={modifier === 1 ? undefined : modifier}
                className={cn({
                  [stl.fade]:
                    (!!highlightAtk ? !matchAtk : !!hovering) &&
                    (!!hovering ? !matchDef : !!highlightAtk) &&
                    hasClicked,
                  [stl.highlight]: matchAtk || matchDef,
                  [stl.highlightExact]: matchAtk && matchDef,
                })}
                onMouseEnter={setHover(atkType, null)}
                onClick={setClick(atkType, null) as any}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DualDefenseChart;
