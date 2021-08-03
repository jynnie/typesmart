import React from "react";
import Box from "ui-box";
import cn from "classnames";
import { ChartContext } from "pages";
import { TYPEINFO, TYPES } from "models/typechart.model";

import { helperToggle } from "components/Chart";

import cstl from "styles/Chart.module.scss";

function DefenseType({
  def,
  setHoverDef,
}: {
  def: TYPES;
  setHoverDef: (val: TYPES) => void;
}) {
  const { clickDef, setClickDef, clickDef2, setClickDef2 } = React.useContext(
    ChartContext,
  );

  if (!def) return null;

  function setHover() {
    if (def) setHoverDef(def);
  }

  const toggleClick = (def: TYPES | null) => (evt: MouseEvent) => {
    helperToggle(evt, def, clickDef, clickDef2, setClickDef, setClickDef2);
  };

  //* Render
  return (
    <th key={def} onMouseEnter={setHover} onClick={toggleClick(def) as any}>
      <Box
        className={cn(cstl.typeIcon, cstl.defBox)}
        backgroundColor={TYPEINFO[def].color}
      >
        {def.slice(0, 3)}
      </Box>
    </th>
  );
}

export default DefenseType;
