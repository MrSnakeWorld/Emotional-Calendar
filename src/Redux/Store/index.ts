import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducerCards } from "../Reducers/reducerCards";
import { reducerEmotions } from "../Reducers/reducerEmotions";
import { reducerModal } from "../Reducers/reducerModal";
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
  cards: reducerCards,
  modal: reducerModal,
  emotions: reducerEmotions,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))