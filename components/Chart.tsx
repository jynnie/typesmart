import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { TYPEORDER, TYPECHART, TYPEINFO, TYPES } from "models/typechart.model";

import Cell from "components/Cell";

import stl from "styles/Chart.module.scss";

function helperToggle(
  evt: MouseEvent,
  newType: TYPES | null,
  primaryType: TYPES | null,
  secondaryType: TYPES | null,
  setPrimary: (val: TYPES | null) => void,
  setSecondary: (val: TYPES | null) => void,
) {
  if (newType) {
    const tryingToSetSecondary = !!evt?.metaKey && !!primaryType;

    if (tryingToSetSecondary) {
      if (newType !== primaryType) {
        if (secondaryType === newType) setSecondary(null);
        else setSecondary(newType);
      } else {
        setSecondary(null);
      }
    } else {
      if (primaryType === newType) setPrimary(null);
      else {
        setPrimary(newType);
        setSecondary(null);
      }
    }
  }
}

//* Main Chart Component
function Chart() {
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
  } = React.useContext(ChartContext);

  const [typeOrder, setTypeOrder] = React.useState<typeof TYPEORDER>(TYPEORDER);
  const alphabeticalOrder = React.useMemo(
    () => [...TYPEORDER].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)),
    [],
  );
  const [hoverAtk, setHoverAtk] = React.useState<TYPES | null>(null);
  const [hoverDef, setHoverDef] = React.useState<TYPES | null>(null);

  const highlightAtk = clickAtk || hoverAtk || null;
  const highlightDef = clickDef || hoverDef || null;

  const hasClicked = !!clickAtk || !!clickDef;

  React.useEffect(() => {
    if (sorting === "custom") setTypeOrder(TYPEORDER);
    else setTypeOrder(alphabeticalOrder);
  }, [sorting, alphabeticalOrder]);

  function clearHovered() {
    setHoverAtk(null);
    setHoverDef(null);
  }

  const setHover = (atk: TYPES | null, def: TYPES | null) => () => {
    if (atk) setHoverAtk(atk);
    if (def) setHoverDef(def);
  };

  const toggleClick = (atk: TYPES | null, def: TYPES | null) => (
    evt: MouseEvent,
  ) => {
    helperToggle(evt, atk, clickAtk, clickAtk2, setClickAtk, setClickAtk2);
    helperToggle(evt, def, clickDef, clickDef2, setClickDef, setClickDef2);
  };

  const setClick = (atk?: TYPES, def?: TYPES) => () => {
    if (atk !== clickAtk || def !== clickDef) {
      if (atk) setClickAtk(atk ?? null);
      if (def) setClickDef(def ?? null);
    } else {
      if (atk) setClickAtk(null);
      if (def) setClickDef(null);
    }
    setClickAtk2(null);
    setClickDef2(null);
  };

  //* Render
  return (
    <table className={cn(stl.table)} onMouseLeave={clearHovered}>
      <thead>
        <tr>
          <th className={stl.key}>
            defense →
            <br />
            attack ↴
          </th>

          {typeOrder.map((defType) => (
            <th
              key={defType}
              onMouseEnter={setHover(null, defType)}
              onClick={toggleClick(null, defType) as any}
            >
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
        {typeOrder.map((atkType) => (
          <tr key={atkType}>
            <td
              onMouseEnter={setHover(atkType, null)}
              onClick={toggleClick(atkType, null) as any}
            >
              <Box
                className={cn(stl.typeIcon, stl.atkBox)}
                backgroundColor={TYPEINFO[atkType].color}
              >
                {atkType}
              </Box>
            </td>

            {typeOrder.map((defType) => {
              const matchAtk =
                highlightAtk === atkType || clickAtk2 === atkType;
              const matchDef =
                highlightDef === defType || clickDef2 === defType;
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
  );
}

export default Chart;
