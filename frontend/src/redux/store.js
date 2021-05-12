import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import podcastReducer from './reducers/podcastReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    podcast: podcastReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
)

export default store