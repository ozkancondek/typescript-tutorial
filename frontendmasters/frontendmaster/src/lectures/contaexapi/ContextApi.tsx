import Application from "./Application";
import { ThemeProvider } from "./theme-context";
import "./style.scss";
import { RGBContextProvider } from "./context";

export const ContextApi = () => {
  return (
    <ThemeProvider>
      <RGBContextProvider>
        <Application />
      </RGBContextProvider>
    </ThemeProvider>
  );
};
