import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions/index'

export default function entries(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: [],
                    answers: []
                }
            }

        case REMOVE_DECK:
            let newState = { ...state }
            delete newState[action.title]
            return newState

        case ADD_CARD:
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: state[action.deckId].questions.concat(action.question),
                    answers: state[action.deckId].questions.concat(action.answer)
                }
            }

        default:
            return state
    }
}