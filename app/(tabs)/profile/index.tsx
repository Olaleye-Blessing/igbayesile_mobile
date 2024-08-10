import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Text>Profile Screen</Text>
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
});
