import {View, ViewProps} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {color} from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(color.background, { light: lightColor, dark: darkColor });

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
