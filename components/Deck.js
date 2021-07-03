import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

function Deck(props) {
    return (
        <View><Text>Deck</Text>
        </View>
    )
}

function mapStateToProps(state) {
    return {
        decks: state
    }
}

export default connect(mapStateToProps)(Deck)
