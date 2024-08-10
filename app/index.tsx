import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { useColorTheme } from '@/hooks/useThemeColor';

export default function LandingScreen() {
	const colorTheme = useColorTheme();

	return (
		<View
			style={{
				...styles.container,
				backgroundColor: colorTheme.background,
			}}
		>
			<View>
				<ThemedText style={styles.title}>
					Find Deals On Hotels and Enjoy
				</ThemedText>
				<ThemedText style={styles.title}>
					Your Dream Vacation.
				</ThemedText>
			</View>
			<View>
				<ThemedText
					style={{
						...styles.para,
						color: colorTheme['muted-foreground'],
					}}
				>
					We have got you covered with amazing deals at thousands upon
					thousands of top hotels in cities and countries worldwide.
				</ThemedText>
			</View>
			<View style={styles.home_container}>
				<Link
					href='/(tabs)'
					asChild
					style={{
						...styles.home_link,
						backgroundColor: colorTheme.primary,
					}}
				>
					<Pressable>
						<Text
							style={{
								...styles.home_text,
								color: colorTheme.background,
							}}
						>
							Let's Go
						</Text>
					</Pressable>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	para: {
		marginTop: 14,
		fontSize: 14,
		textAlign: 'center',
	},
	home_container: {
		width: '100%',
	},
	home_link: {
		marginTop: 20,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 16,
		width: '100%',
		textAlign: 'center',
	},
	home_text: {
		textAlign: 'center',
		fontWeight: '700',
	},
});
