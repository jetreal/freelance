import { combineReducers, createStore } from "redux";
import ButtonsReducer from './ButtonsReducer'

let reducers = combineReducers({
    ButtonsReducer
})

let store = createStore(reducers);

window.store = store;

export default store;