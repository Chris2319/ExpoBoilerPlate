/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

// TODO: Enum standard still open for project decision.
export enum color {
  text = 'text',
  background = 'background',
  tint = 'tint',
  icon = 'icon',
  tabIconDefault = 'tabIconDefault',
  tabIconSelected = 'tabIconSelected',
}

export const Colors = {
  light: {
    [color.text]: '#11181C',
    [color.background]: '#fff',
    [color.tint]: tintColorLight,
    [color.icon]: '#687076',
    [color.tabIconDefault]: '#687076',
    [color.tabIconSelected]: tintColorLight,
  },
  dark: {
    [color.text]: '#ECEDEE',
    [color.background]: '#151718',
    [color.tint]: tintColorDark,
    [color.icon]: '#9BA1A6',
    [color.tabIconDefault]: '#9BA1A6',
    [color.tabIconSelected]: tintColorDark,
  },
};
