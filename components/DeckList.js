import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'

function DeckList({ decks }) {
    if (!decks) {
        return
    }

    return (
        <View>
            {
                Object.keys(decks).map((item, index) => {
                    return <DeckItem data={decks[item]} />
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
