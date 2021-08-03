import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { TYPEORDER, TYPECHART, TYPEINFO, TYPES } from "models/typechart.model";

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

function Chart() {
  const [defenseOrder] = React.useState<typeof TYPEORDER>(TYPEORDER);

  const [hoverAtk, setHoverAtk] = React.useState<TYPES | null>(null);
  const [hoverDef, setHoverDef] = React.useState<TYPES | null>(null);

  const [clickAtk, setClickAtk] = React.useState<TYPES | null>(null);
  const [clickDef, setClickDef] = React.useState<TYPES | null>(null);

  const highlightAtk = clickAtk || hoverAtk || null;
  const highlightDef = clickDef || hoverDef || null;

  const hasClicked = !!clickAtk || !!clickDef;

  function clearHovered() {
    setHoverAtk(null);
    setHoverDef(null);
  }
  function clearClicked() {
    setClickAtk(null);
    setClickDef(null);
  }
  const setHover = (atk?: TYPES, def?: TYPES) => () => {
    if (atk) setHoverAtk(atk);
    if (def) setHoverDef(def);
  };
  const setClick = (atk?: TYPES, def?: TYPES) => () => {
    if (atk !== clickAtk && def !== clickDef) {
      if (atk) setClickAtk(atk);
      if (def) setClickDef(def);
    } else {
      if (atk) setClickAtk(null);
      if (def) setClickDef(null);
    }
  };

  return (
    <>
      <div onClick={clearClicked}>Clear</div>
      <table
        className={cn(stl.table, {
          [stl.hasClicked]: hasClicked,
        })}
        onMouseLeave={clearHovered}
      >
        <thead>
          <tr>
            <th className={stl.key}>
              defense →
              <br />
              attack ↴
            </th>
            {defenseOrder.map((defType) => (
              <th key={defType}>
                <Box
                  className={cn(stl.typeIcon, stl.defBox)}
                  backgroundColor={TYPEINFO[defType].color}
                  onMouseEnter={setHover(undefined, defType)}
                  onClick={setClick(undefined, defType)}
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
                  onMouseEnter={setHover(atkType)}
                  onClick={setClick(atkType)}
                >
                  {atkType}
                </Box>
              </td>
              {defenseOrder.map((defType) => {
                const matchAtk = highlightAtk === atkType;
                const matchDef = highlightDef === defType;
                return (
                  <Cell
                    key={defType}
                    value={TYPECHART?.[atkType]?.[defType]}
                    className={cn({
                      [stl.fade]:
                        (!!highlightAtk ? !matchAtk : !!highlightDef) &&
                        (!!highlightDef ? !matchDef : !!highlightAtk) &&
                        hasClicked,
                      [stl.highlight]: matchAtk || matchDef,
                      [stl.highlightExact]: matchAtk && matchDef,
                    })}
                    onMouseEnter={setHover(atkType, defType)}
                    onClick={setClick(atkType, defType)}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Chart;