import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import DeckItem from './DeckItem'
import Animation from './Animation'

function DeckList({ decks, navigation }) {
    const [showAnimation, setShowAnimation ] = useState(false)

    const handleAnimation = (deckId) => {
        setShowAnimation(true)
        setTimeout(() => {
            setShowAnimation(false)
            navigation.navigate('Deck', { deckId })
        }, 1000);
    }

    if (!decks) {
        return
    }

    if (showAnimation) {
        return <Animation />
    }

    return (
        <ScrollView>
            {
                Object.keys(decks).map((item, index) => {
                    return <TouchableOpacity key={decks[item].title}
                    onPress={() => handleAnimation(item)}>
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
