import { combineReducers, createStore } from "redux";
import { reducerCards } from "../Reducers/reducerCards";
import { reducerModal } from "../Reducers/reducerModal";

export const rootReducer = combineReducers({
  cards: reducerCards,
  modal: reducerModal
})

export const store = createStore(rootReducer)