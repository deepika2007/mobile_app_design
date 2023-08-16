import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/reducers/todoSlick';

export default function CustomComponent() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state) => console.log(state))
    const handleAdd = () => {
        if (todo !== '') {
            console.log('todo', todo)
            dispatch(addTodo({
                // id: Date.now(),
                text: todo,
            }))
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Native Todo</Text>
            <TextInput style={styles.textField} onChangeText={(e) => setTodo(e)} placeholder='Add todo' />
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>Add</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 22,
    },
    heading: {
        fontSize: 24,
        marginBottom: 22
    },
    textField: {
        height: 50,
        border: "2px solid silver",
        padding: 10,
        borderRadius: 10,
    },
    addButton: {
        width: 100,
        height: 40,
        marginHorizontal: "auto",
        marginTop: 12,
        textAlignVertical: 'center',
        backgroundColor: "#14844a",
        color: "#fff",
        borderRadius: 10,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
