const initialState = {
  returnEmotions: function (currentEmotion: string, currentOpacity: number, deleteFlag: boolean = false) {
    return this.emotions.map((emotion: any) => {
      if (deleteFlag) {
        if (emotion.type === currentEmotion) {
          return {
            type: emotion.type,
            emotionId: emotion.emotionId,
            displayName: emotion.displayName,
            active: false,
            opacity: 0,
            color: emotion.color
          }
        } else {
          return emotion
        }
      } else {
        if (emotion.type === currentEmotion) {
          return emotion = {
            type: emotion.type,
            emotionId: emotion.emotionId,
            displayName: emotion.displayName,
            active: true,
            opacity: currentOpacity,
            color: emotion.color
          }
        } else if (emotion.active && !emotion.opacity) {
          return emotion = {
            type: emotion.type,
            emotionId: emotion.emotionId,
            displayName: emotion.displayName,
            active: false,
            opacity: emotion.opacity,
            color: emotion.color
          }
        } else {
          return emotion
        }
      }
    })

  },
  current: 'none',
  currentOpacity: 0,
  numberOfActive: 0,
  activeEmotions: [

  ],
  emotions: [{
    type: 'joy',
    emotionId: 0,
    displayName: 'Радость',
    active: false,
    opacity: 0,
    color: {
      redColor: 255,
      greenColor: 255,
      blueColor: 0,
    }
  }, {
    type: 'sadness',
    emotionId: 1,
    displayName: 'Грусть',
    active: false,
    opacity: 0,
    color: {
      redColor: 0,
      greenColor: 0,
      blueColor: 255,
    }
  }, {
    type: 'void',
    emotionId: 2,
    displayName: 'Пустота',
    active: false,
    opacity: 0,
    color: {
      redColor: 0,
      greenColor: 0,
      blueColor: 0
    }
  }]
}

export const reducerEmotions = (state: any = initialState, action: any): any => {

  switch (action.type) {
    case 'CHOOSE_EMOTION':
      return {
        returnEmotions: state.returnEmotions,
        current: action.value.currentEmotion,
        currentOpacity: action.value.currentOpacity,
        numberOfActive: state.emotions.filter((emotion: any) => emotion.active).length,
        activeEmotions: [],
        emotions: state.returnEmotions(action.value.currentEmotion, action.value.currentOpacity)
      }
    case 'CHANGE_OPACITY':
      return {
        returnEmotions: state.returnEmotions,
        current: state.current,
        currentOpacity: action.value.currentOpacity,
        numberOfActive: state.emotions.filter((emotion: any) => emotion.active).length,
        activeEmotions: state.activeEmotions,
        emotions: state.returnEmotions(action.value.currentEmotion, action.value.currentOpacity)
      }
    case 'CLEAR_EMOTION': {
      return {
        returnEmotions: state.returnEmotions,
        current: 'none',
        currentOpacity: 0,
        emotions: state.returnEmotions(action.value.currentEmotion, 0, true)
      }
    }
    case 'CLEAR_ALL_EMOTIONS': {
      return initialState
    }
    default:
      return state
  }
}
