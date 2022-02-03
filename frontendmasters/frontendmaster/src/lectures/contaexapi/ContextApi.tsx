import Application from "./Application";
import { ThemeProvider } from "./theme-context";
import "./style.scss";

export const ContextApi = () => {
  return (
    <ThemeProvider>
      <Application />
    </ThemeProvider>
  );
};
