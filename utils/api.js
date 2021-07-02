import AsyncStorage from '@react-native-async-storage/async-storage'
const STORAGE_KEY = "mobile-flashcards:decks"

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        return data
    })
}

export function saveDeckTitle(title) {
    return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
        let data = JSON.parse(results)
        if (data === null) {
            data = {}
        }

        data[title] = {
            title: title,
            questions: [],
            answers:[]
        }
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}    

export function removeDeckTitle(title) {
    return AsyncStorage.getItem(STORAGE_KEY).then((results) => {
        const data = JSON.parse(results)
        delete data[title]
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}