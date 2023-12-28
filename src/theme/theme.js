import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
            light: 'white',
        },
        secondary: {
            main: '#f50057',
        },
        other: {
            main: '#f0f',
        },
        shape: {
            borderRadius: '5px'
        }
    }
})