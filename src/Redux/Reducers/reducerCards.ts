const firstCard = {
  isDone: false,
  id: 0,
  key: 0,
  value: {
    header: '',
    content: ''
  },
  emotions: [{
    opacity: 1,
    color: {
      redColor: 255,
      greenColor: 255,
      blueColor: 255
    }
  }, {
    opacity: 1,
    color: {
      redColor: 255,
      greenColor: 255,
      blueColor: 255
    }
  }]
}
const secondCard = {
  isDone: true,
  id: 1,
  key: 1,
  value: {
    header: 'Мне грустно',
    content: 'Сегодня умер мой Сталин, по имени Иосиф. Я его очень любил и уважал, но он умер. Не знаю, что я буду теперь делать. Моя жизнь без сталина бессмыслена.'
  },
  emotions: [{
    opacity: 0.4,
    color: {
      redColor: 42,
      greenColor: 82,
      blueColor: 190
    }
  }, {
    opacity: 0.5,
    color: {
      redColor: 128,
      greenColor: 0,
      blueColor: 255
    }
  }]
}


const initialState = {
  fillCards(firstCard: Object, newCard: Object) {
    let cards: any[] = Object.values(this.cards).filter((card: any) => card !== firstCard)
    return [firstCard, newCard, ...cards]
  },
  cards: [firstCard, secondCard],
  currentEmotions: [{
    opacity: 1,
    color: {
      redColor: 255,
      greenColor: 255,
      blueColor: 255
    }
  }, {
    opacity: 1,
    color: {
      redColor: 255,
      greenColor: 255,
      blueColor: 255
    }
  }]
}

export const reducerCards = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        fillCards: state.fillCards,
        cards: state.fillCards(firstCard, {
          isDone: true,
          key: state.cards[state.cards.length - 1].key + 1,
          id: state.cards[state.cards.length - 1].id + 1,
          value: action.value,
          emotions: [...state.currentEmotions]
        }),
        currentEmotions: state.currentEmotions
      }
    case 'ADD_EMOTION':
      return {
        fillCards: state.fillCards,
        cards: state.cards,
        currentEmotions: action.value.activeEmotions.length ?
          action.value.activeEmotions.length === 1 ? [...action.value.activeEmotions, ...action.value.activeEmotions] : [...action.value.activeEmotions]
          : initialState.currentEmotions
      }
    case 'CLEAR_CURRENT_EMOTION':
      return {
        fillCards: state.fillCards,
        cards: state.cards,
        currentEmotions: initialState.currentEmotions
      }
    default:
      return state
  }
}

