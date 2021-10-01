const initialState = {
  cards: [{
    isDone: false,
    id: 0,
    key: 0,
    value: {
      header: '',
      content: ''
    },
    emotions: [{
      type: 'choose',
      opacity: 1,
      color: {
        redColor: 0,
        greenColor: 0,
        blueColor: 0
      }
    }]
  }],
  currentEmotions: [{
    type: 'none',
    opacity: 0,
    color: {
      redColor: 0,
      greenColor: 0,
      blueColor: 0
    }
  }]
}

export const reducerCards = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case 'ADD_CARD':
      if (action.value.header !== '' && action.value.content !== '') {
        return {
          cards: [
            ...state.cards, {
              isDone: true,
              key: state[state.length - 1].key + 1,
              id: state[state.length - 1].id + 1,
              value: action.value,
              emotions: [...state.emotions]
            },
          ],
          currentEmotions: state.emotions
        }
      }
      return state
    case 'ADD_EMOTION':
      return {
        cards: state.cards,
        currentEmotions: [...state.currentEmotions, {
          type: action.value.type,
          opacity: action.value.opacity,
          color: action.value.color
        }]
      }
    case 'CLEAR_CURRENT_EMOTIONS':
      return { 
        cards: state.cards, 
        currentEmotions: [{
          type: 'none',
          opacity: 0,
          color: 'none'
        }]
      }
    default:
      return state
  }
}

