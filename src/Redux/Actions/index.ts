//actions for reducerCards
const FETCH_CARD = 'FETCH_CARD'
const ADD_CARD = 'ADD_CARD'
const ADD_EMOTION = 'ADD_EMOTION'
const CLEAR_CURRENT_EMOTION = 'CLEAR_CURRENT_EMOTION'

export const fetchCard = () => ({
  type: FETCH_CARD
})

export const addCard = (value: any) => ({
  type: ADD_CARD,
  value
})

export const addEmotion = (value: any) => ({
  type: ADD_EMOTION,
  value
})

export const clearCurrentEmotion = () => ({
  type: CLEAR_CURRENT_EMOTION
})


//actions for reducerModal
const CLOSE_MODAL = 'CLOSE_MODAL'
const OPEN_MODAL = 'OPEN_MODAL' 
const CLOSE_MENU = 'CLOSE_MENU'
const OPEN_MENU = 'OPEN_MENU'
const CLOSE_REG = 'CLOSE_REG'
const OPEN_REG = 'OPEN_REG'

export const closeModal = () => ({
  type: CLOSE_MODAL,
})

export const openModal = () => ({
  type: OPEN_MODAL,
})

export const closeMenu = () => ({
  type: CLOSE_MENU,
})

export const openMenu = () => ({
  type: OPEN_MENU,
})

export const closeReg = () => ({
  type: CLOSE_REG,
})

export const openReg = () => ({
  type: OPEN_REG
})

//actions for reducerEmotions
const CHOOSE_EMOTION = 'CHOOSE_EMOTION'
const CHANGE_OPACITY = 'CHANGE_OPACITY'
const CLEAR_EMOTION = 'CLEAR_EMOTION'
const CLEAR_ALL_EMOTIONS = 'CLEAR_ALL_EMOTIONS'

export const chooseEmotion = (value: any) => ({
  type: CHOOSE_EMOTION,
  value
})

export const changeOpacity = (value: any) => ({
  type: CHANGE_OPACITY,
  value
})

export const clearEmotion = (value: any) => ({
  type: CLEAR_EMOTION,
  value
})

export const clearAllEmotions = () => ({
  type: CLEAR_ALL_EMOTIONS  
})

