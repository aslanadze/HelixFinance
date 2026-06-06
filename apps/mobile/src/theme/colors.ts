const PALETE = {};

export const COLORS = {
    primary: '#cae95c',
    secondary: '#262626',

    white: '#dcdcd8',
    black: '#000',
    dark: '#0d0f09',

    background: '#171717', //background color of the app
    surface: '#262626', //background color of the components
    surfaceElevated: '#323232',//background color of the components when elevated , popup , cards element

    greenBackground:'#0c3502',

    textPrimary: '#dcdcd8', //main text color
    textSecondary: '#394531', //secondary text color
    textMuted: '#555c50',//lighter text color
    textGreen: '#374F0C',

    success: '#22c55e',//success color
    error: '#ef4444',//error color
    warning: '#f59e0b',//warning color
    info: 'rgb(7 134 255 / 0.37)',//info color

    border: '#262626', //border color
} as const;

export type ColorType = keyof typeof COLORS;