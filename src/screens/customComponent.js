import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function CustomComponent() {
    return (
        <View style={styles.container}>
            <Text>Native Todo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    }
});
