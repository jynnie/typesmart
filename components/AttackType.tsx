import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { TYPECHART, TYPEINFO, TYPES } from "models/typechart.model";

import { helperToggle } from "components/Chart";

import cstl from "styles/Chart.module.scss";

function AttackType({
  atk,
  setHoverAtk,
}: {
  atk: TYPES;
  setHoverAtk: (val: TYPES) => void;
}) {
  const { clickAtk, setClickAtk, clickAtk2, setClickAtk2 } = React.useContext(
    ChartContext,
  );

  if (!atk) return null;

  function setHover() {
    if (atk) setHoverAtk(atk);
  }

  const toggleClick = (atk: TYPES | null) => (evt: MouseEvent) => {
    helperToggle(evt, atk, clickAtk, clickAtk2, setClickAtk, setClickAtk2);
  };

  //* Render
  return (
    <td key={atk} onMouseEnter={setHover} onClick={toggleClick(atk) as any}>
      <Box
        className={cn(cstl.typeIcon, cstl.atkBox)}
        backgroundColor={TYPEINFO[atk].color}
        color={TYPEINFO[atk].font}
      >
        {atk}
      </Box>
    </td>
  );
}

export default AttackType;
