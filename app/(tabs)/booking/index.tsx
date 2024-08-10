import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function BookingScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Booking Screen</Text>
			</View>
			<Link href='/(tabs)' asChild>
				<Pressable>
					<Text>Home</Text>
				</Pressable>
			</Link>
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
});
