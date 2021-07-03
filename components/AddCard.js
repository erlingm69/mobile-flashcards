import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { addCard } from '../actions'

const AddBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={styles.addButton}>
            <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
    )
}

function AddCard({ dispatch, navigation, deckId }) {
    const [questionText, setQuestionText] = useState("")
    const [answerText, setAnswerText] = useState("")

    function add(){
        setQuestionText("")
        setAnswerText("")
        dispatch(addCard(deckId, questionText, answerText))
        navigation.goBack()
    }

    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setQuestionText(text)
                }}
                value={questionText}
                placeholder="Enter Your Question"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => {
                    setAnswerText(text)
                }}
                value={answerText}
                placeholder="Enter Your Answer"
            />
            <AddBtn onPress={add}/>
        </View>
    )
}

const styles = StyleSheet.create({
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

function mapStateToProps(state, { route }) {
    const { deckId } = route.params
    return {
        deckId,
        ...state[deckId]
    }
}

export default connect(mapStateToProps)(AddCard)  