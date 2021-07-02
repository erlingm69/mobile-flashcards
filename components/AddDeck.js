import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

const AddBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.addButton}>
            <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
    )
}

export default function AddDeck({ navigation }) {
    const [text, setText] = useState("")

    function add(){
        saveDeckTitle(text)
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text style={styles.titleText}>What is the title of your new deck?</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setText(text)
                }}
                value={text}
                placeholder="Enter Your Deck Title"
            />
            <AddBtn onPress={add}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        height: 40,
        margin: 12,
        padding: 4,
        borderWidth: 1,
    },
    addButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 7,
        height: 45,
        backgroundColor: purple
    },
    addBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
});
