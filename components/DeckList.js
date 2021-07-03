import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'

function DeckList({ decks, navigation }) {
    if (!decks) {
        return
    }

    return (
        <View>
            {
                Object.keys(decks).map((item, index) => {
                    return <TouchableOpacity key={decks[item].title} onPress={() => navigation.navigate('Deck',
                        { deckId: item })}>
                        <DeckItem data={decks[item]} />
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckList)
