export const RECEIVE_DECKS = 'RECEIVE DECKS'
export const ADD_DECK = 'ADD DECK'

export function receiveDecks(decks) {
    return({
        type: RECEIVE_DECKS,
        decks,
    })
}

export function addDeck(title) {
    return({
        type: ADD_DECK,
        title,
    })
}