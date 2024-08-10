import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/colors';

export { useColorScheme } from 'react-native';

export const useCurrentTheme = () => {
	const theme = (useColorScheme() ?? 'light') as keyof typeof Colors;

	return theme;
};
