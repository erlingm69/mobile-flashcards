import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

function Deck({title, questions}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{`${questions.length} cards`}</Text>
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
        color: gray
    },

  });  

function mapStateToProps(state, {route}) {
    const { deckId } = route.params
    return {
        deckId,
        ...state[deckId]
    }
}

export default connect(mapStateToProps)(Deck)
