import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appReducer from './Redux/state'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


const store = createStore(appReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);