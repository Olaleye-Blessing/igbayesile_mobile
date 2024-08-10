/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/colors';
import { useCurrentTheme } from './useColorScheme';

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	const theme = useColorScheme() ?? 'light';
	const colorFromProps = props[theme];

	return colorFromProps ?? Colors[theme][colorName];
}

// TODO: Remove the hook above when this one is tested and trusted.
export const useColorTheme = () => {
	return Colors[useCurrentTheme()];
};
