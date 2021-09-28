import { combineReducers, createStore } from "redux";
import { reducerCards } from "../Reducers/reducerCards";
import { reducerEmotions } from "../Reducers/reducerEmotions";
import { reducerModal } from "../Reducers/reducerModal";

export const rootReducer = combineReducers({
  cards: reducerCards,
  modal: reducerModal,
  emotions: reducerEmotions
})

export const store = createStore(rootReducer)