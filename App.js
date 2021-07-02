import React from 'react'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)

export default function App() {
    return (<Provider store={store}>
        <Main />
    </Provider>)
}