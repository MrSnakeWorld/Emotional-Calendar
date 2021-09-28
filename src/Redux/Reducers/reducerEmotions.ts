const initialState = {
  current: 'none',
  value: 0,
  joy: {
    active: false,
    opacity: 0
  },
  sadness: {
    active: false,
    opacity: 0
  },
  void: {
    active: false,
    opacity: 0
  }
}
export const reducerEmotions = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case 'CHOOSE_EMOTION':
      return {
        current: !state[`${action.emotion}`].active ? action.emotion : 'none',
        value: !state[`${action.emotion}`].active ? 0 : state.value,
        [action.emotion]: {
          active: !state[`${action.emotion}`].active,
          opacity: action.emotion.opacity
        },
        [action.emotion === 'joy' ? '_temp' : 'joy']: {
          active: state.joy.active,
          opacity: state.joy.opacity
        },
        [action.emotion === 'sadness' ? '_temp' : 'sadness']: {
          active: state.sadness.opacity,
          opacity: state.sadness.opacity
        },
        [action.emotion === 'void' ? '_temp' : 'void']: {
          active: state.void.opacity,
          opacity: state.void.opacity
        }
      }


    case 'CHANGE_OPACITY':
      let stateEmotion = state.current
      return {
        current: stateEmotion,
        value: action.opacity,
        [state.current]: {
          active: state[`${state.current}`].active,
          opacity: action.opacity / 100
        },
        [state.current === 'joy' ? '_temp' : 'joy']: {
          active: state.joy.active,
          opacity: state.joy.opacity
        },
        [state.current === 'sadness' ? '_temp' : 'sadness']: {
          active: state.sadness.active,
          opacity: state.sadness.opacity
        },
        [state.current === 'void' ? '_temp' : 'void']: {
          active: state.void.active,
          opacity: state.void.opacity
        }

      }

    default:
      return state
  }
}