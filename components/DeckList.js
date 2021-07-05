import { View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'

function DeckList({ decks, navigation }) {
    if (!decks) {
        return
    }

    return (
        <ScrollView>
            {
                Object.keys(decks).map((item, index) => {
                    return <TouchableOpacity key={decks[item].title} onPress={() => navigation.navigate('Animation',
                        { deckId: item })}>
                        <DeckItem data={decks[item]} />
                    </TouchableOpacity>
                })
            }
        </ScrollView>
    )
}

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(DeckList)
