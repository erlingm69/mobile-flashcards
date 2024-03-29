export const RECEIVE_DECKS = 'RECEIVE DECKS'
export const ADD_DECK = 'ADD DECK'
export const REMOVE_DECK = 'REMOVE DECK'
export const ADD_CARD = 'ADD CARD'

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

export function removeDeck(title) {
    return({
        type: REMOVE_DECK,
        title,
    })
}

export function addCard(deckId, question, answer) {
    return({
        type: ADD_CARD,
        deckId,
        question,
        answer
    })
}
