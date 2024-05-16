import { Theme } from "@mui/material";

export type TAuthInitialState = {
  isAuthenticated: boolean;
  user: {};
  step:string
};

export type TThemeInitState = {
  mode: "dark" | "light" | string;
  logoPath: string;
};

export type ITitle = {
  name?: string;
};

export type TThemeList = {
  name: "light" | "dark";
  component: Theme;
};

export type TSideDrawer = {
  isOpen:boolean
}