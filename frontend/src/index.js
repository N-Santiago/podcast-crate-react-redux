import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'  
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import podcasts from './reducers/podcastReducer'
import authorization from './reducers/authorizationReducer';
import { createBrowserHistory } from 'history';

const reducer = combineReducers({
  podcasts,
  authorization,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={ store }>
    <Router history={history} >
      <App />
    </Router>
  </Provider>  
  , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
