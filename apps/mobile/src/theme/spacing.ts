export const SPACING = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48,
} as const;

export const RADIUS = {
    sm: 6, //Textboxes or radius for buttons
    md: 12, //Standard radius for primary buttons
    lg: 18, //Radius for cards
    xl: 24, //Radius for cards and larger elements
    round: 999,//To make a circle
} as const;

export type SpacingType = keyof typeof SPACING;
export type RadiusType = keyof typeof RADIUS;