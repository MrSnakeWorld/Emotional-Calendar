const ADD_CARD = 'ADD_CARD'
const CLOSE_MODAL = 'CLOSE_MODAL'
const OPEN_MODAL = 'OPEN_MODAL' 
const CLOSE_MENU = 'CLOSE_MENU'
const OPEN_MENU = 'OPEN_MENU'
const CHOOSE_EMOTION = 'CHOOSE_EMOTION'
const CHANGE_OPACITY = 'CHANGE_OPACITY'

export const addCard = (value: any) => ({
  type: ADD_CARD,
  value
})


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

export const chooseEmotion = (emotion: any) => ({
  type: CHOOSE_EMOTION,
  emotion
})

export const changeOpacity = (opacity: number) => ({
  type: CHANGE_OPACITY,
  opacity
})