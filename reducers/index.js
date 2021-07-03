import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK } from '../actions/index'

export default function entries (state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.title] : {
                    title: action.title,
                    questions: [],
                    answers: []
                }
            }

        case REMOVE_DECK:
            let newState = {...state}
            delete newState[action.title]
            return newState

        default:
            return state
    }
}