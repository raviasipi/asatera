import { createSlice } from "@reduxjs/toolkit";
import { TThemeInitState } from "../../types/app.types";
import { globalConsts } from "../../constants/constants";

const initialState: TThemeInitState = {
  mode: globalConsts.defaultTheme,
  logoPath: globalConsts.defaultLogo,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.logoPath =
        state.mode === "light" ? globalConsts.logoLight : globalConsts.logoDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer