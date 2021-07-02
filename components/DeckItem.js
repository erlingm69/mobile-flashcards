import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { gray } from '../utils/colors'

export default function DeckItem({data}){

    const title = data.title
    const nrQuestions = data.questions.length

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.subTitleText}>{`${nrQuestions} cards`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderBottomWidth: 2,
        padding: 10
    },
    titleText: {
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