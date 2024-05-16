import { ThemeProvider } from "@emotion/react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useAppSelector } from "../services/hooks/storeHooks";
import { Outlet } from "react-router-dom";
import useGetTheme from "../services/hooks/useGetTheme";

function Layout() {
  const { theme: appTheme } = useAppSelector((state) => state);
  //   const mode = useAppSelector((state) => state.theme.mode);
  const theme = useGetTheme(appTheme.mode);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout;
