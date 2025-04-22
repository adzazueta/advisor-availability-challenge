'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#09b3b0',
        },
        secondary: {
            main: '#d4d8de'
        },
        background: {
            default: '#ffffff',
        },
        action: {
            disabled: '#ffffff'
        }
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
        subtitle1: {
            fontSize: '1.15rem',
            fontWeight: 500
        }
    },
});

export default theme;
