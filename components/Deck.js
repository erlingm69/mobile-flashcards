import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { gray, purple, red, white } from '../utils/colors'
import { removeDeck } from '../actions'
import { removeDeckTitle } from '../utils/api'

function Deck({ deckId, title, questions, navigation, dispatch }) {

    function handleDelete() {
        dispatch(removeDeck(title))
        removeDeckTitle(title)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{`${questions.length} cards`}</Text>
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    navigation.navigate('Add Card',
                    { deckId })}
                }>
                <Text style={styles.addBtnText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.startButton}>
                <Text style={styles.addBtnText}>Start Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}
                style={styles.deleteButton}>
                <Text style={styles.deleteBtnText}>Delete Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, titleText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    subTitleText: {
        fontSize: 15,
        textAlign: "center",
        color: gray,
        marginBottom: 10
    },
    addButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: purple
    },
    startButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
        backgroundColor: red
    },
    deleteButton: {
        padding: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 10,
        borderRadius: 7,
        height: 45,
    },
    addBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    deleteBtnText: {
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

export default connect(mapStateToProps)(Deck)
