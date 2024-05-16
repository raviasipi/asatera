import { Theme } from "@mui/material";
import { TThemeList } from "../../types/app.types";
import darkTheme from "../../theme/dark";
import lightTheme from "../../theme/light";

const themes: TThemeList[] = [
  { name: "light", component: lightTheme },
  { name: "dark", component: darkTheme },
];
const useGetTheme = (mode: string): Theme => {
  const selectedTheme = themes.find((item) => item.name === mode)?.component;
  if (selectedTheme) {
    return selectedTheme;
  }
  return lightTheme;
};

export default useGetTheme;