import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

// const reducer = combineReducers({
//     podcasts,
//     forms,
// })


let reducer = ''

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, applyMiddleware(thunk))

export default store