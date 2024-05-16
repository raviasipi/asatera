import {ThemeProvider} from '@emotion/react'
import {CssBaseline, StyledEngineProvider} from '@mui/material';
import { useAppSelector } from "../services/hooks/storeHooks";
import useGetTheme from "../services/hooks/useGetTheme";
import { Outlet } from 'react-router-dom';

function AuthLayout(){
    const mode = useAppSelector(state => state.theme.mode)
    const theme = useGetTheme(mode)
    return(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Outlet />
            </ThemeProvider>
        </StyledEngineProvider>
    )
}


export default AuthLayout