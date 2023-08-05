import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function CustomComponent() {
    const names = [
        { name: 'user1' },
        { name: 'user2' },
        { name: 'user3' },
        { name: 'user4' },
        { name: 'user5' },
        { name: 'user6' },
        { name: 'user7' },
        { name: 'user8' },

    ]
    return (
        <View style={styles.container}>
            {/* <Text>Hello world</TSext> */}
            <FlatList data={names} renderItem={(i) => {
               return <Text style={styles.text}>{i.item.name}</Text>
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color:'lime'
    },
});
