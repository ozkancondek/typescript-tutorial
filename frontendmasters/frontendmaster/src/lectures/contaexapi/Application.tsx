import * as React from "react";

import { ColorSwatch } from "./ColorSwatch";
import { ColorInputs } from "./ColorInputs";
import { ColorSliders } from "./ColorSliders";

import { toRGB } from "./utilities";
import { reducer } from "./reducer";
import { useTheme } from "./theme-context";

const Application = () => {
  const themes = useTheme();
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <main
      style={{
        borderColor: toRGB(rgb),
        ...themes.darkb,
      }}
    >
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default Application;
