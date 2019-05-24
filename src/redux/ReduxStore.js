import { combineReducers, createStore } from "redux";
import ButtonsReducer from './ButtonsReducer'

import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga, { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
    ButtonsReducer
})

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

window.store = store;

export default store;