enum TextColors {
    Pink = '#f472b6',
    Indigo = '#a5b4fc',
    Violet = '#c4b5fd',
    Blue = '#7dd3fc',
    Teal = '#5eead4',
    Emerald = '#6ee7b7',
    Lime = '#d9f99d',
    Yellow = '#fef9c3',
    Black = '#000',
}

export enum BackgroundColors {
    Light = '#FFF',
    Dark = '#6b7280',
}

export const textColors = Object.values(TextColors) as TextColors[];
export const bgColors = Object.values(BackgroundColors) as BackgroundColors[];

export const defaultPreferences = {
    fontSize: 16,
    bgColor: BackgroundColors.Light,
    textColor: TextColors.Black,
};
