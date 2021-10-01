// const initialState = {
//   current: 'none',
//   value: 0,
//   joy: {
//     type: 'joy',
//     active: false,
//     opacity: 0
//   },
//   sadness: {
//     type: 'sadness',
//     active: false,
//     opacity: 0
//   },
//   void: {
//     type: 'void',
//     active: false,
//     opacity: 0
//   }
// }

const initialState = {
  current: 'none',
  currentOpacity: 0,
  emotions: [{
    type: 'joy',
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
        current: action.value.currentEmotion,
        currentOpacity: action.value.currentOpacity,
        emotions: Object.values(state.emotions).map((emotion: any) => {
          if (emotion.type === action.value.currentEmotion) {
            return emotion = {
              type: emotion.type,
              displayName: emotion.displayName,
              active: true,
              opacity: action.value.currentOpacity,
              color: emotion.color
            }
          }
          return emotion
        })
      }
    case 'CHANGE_OPACITY':
      return {
        current: state.current,
        currentOpacity: action.value.opacity,
        emotions: Object.values(state.emotions).map((emotion: any) => {
          if (emotion.type === action.value.currentEmotion) {
            if (action.value.opacity === 0) {
              return {
                type: emotion.type,
                displayName: emotion.displayName,
                active: false,
                opacity: action.value.opacity,
                color: emotion.color
              }
            } else {
              return {
                type: emotion.type,
                displayName: emotion.displayName,
                active: emotion.active,
                opacity: action.value.opacity,
                color: emotion.color
              }
            }
          }
          return emotion
        })
      }
    case 'CLEAR_EMOTION': {
      return {
        current: 'none',
        currentOpacity: 0,
        emotions: Object.values(state.emotions).map((emotion: any) => {
          if (emotion.type === action.value.currentEmotion) {
            return {
              type: emotion.type,
              displayName: emotion.displayName,
              active: false,
              opacity: 0,
              color: emotion.color
            }
          }
          return emotion
        })
      }
    }
    case 'CLEAR_ALL_EMOTIONS': {
      return {
        current: 'none',
        currentOpacity: 0,
        emotions: Object.values(state.emotions).map((emotion: any) => {
          return {
            type: emotion.type,
            displayName: emotion.displayName,
            active: false,
            opacity: 0,
            color: emotion.color
          }
        })
      }
    }
    default:
      return state
  }
}

// export const reducerEmotions = (state: any = initialState, action: any): any => {
//   switch (action.type) {
//     case 'CHOOSE_EMOTION':

//       console.log('state: ', state)
//       return {
//         current: action.emotion,
//         value: state[`${action.emotion}`].active ? state[`${action.emotion}`].opacity : 0,
//         [action.emotion]: {
//           type: state[`${action.emotion}`].type,
//           active: true,
//           opacity: state[`${action.emotion}`].opacity
//         },
//         [action.emotion === 'joy' ? '_temp' : 'joy']: {
//           type: state.joy.type,
//           active: state.joy.opacity === 0 ? false : true,
//           opacity: state.joy.opacity
//         },
//         [action.emotion === 'sadness' ? '_temp' : 'sadness']: {
//           type: state.sadness.type,
//           active: state.sadness.opacity === 0 ? false : true,
//           opacity: state.sadness.opacity
//         },
//         [action.emotion === 'void' ? '_temp' : 'void']: {
//           type: state.void.type,
//           active: state.void.opacity === 0 ? false : true,
//           opacity: state.void.opacity
//         },
//       }

//     case 'CLEAR_EMOTION':
//       console.log('state: ', state)
//       return {
//         current: 'none',
//         value: 0,
//         [action.emotion]: {
//           active: false,
//           opacity: 0
//         },
//         [action.emotion === 'joy' ? '_temp' : 'joy']: state.joy,
//         [action.emotion === 'sadness' ? '_temp' : 'sadness']: state.sadness,
//         [action.emotion === 'void' ? '_temp' : 'void']: state.void
//       }

//     case 'CLEAR_ALL_EMOTIONS':
//       return {
//         current: 'none',
//         value: 0,
//         joy: {
//           type: 'joy',
//           active: false,
//           opacity: 0
//         },
//         sadness: {
//           type: 'sadness',
//           active: false,
//           opacity: 0
//         },
//         void: {
//           type: 'void',
//           active: false,
//           opacity: 0
//         }
//       }

//     case 'CHANGE_OPACITY':
//       return {
//         current: state.current,
//         value: action.opacity,
//         [state.current]: {
//           active: state[`${state.current}`].active,
//           opacity: action.opacity
//         },
//         [state.current === 'joy' ? '_temp' : 'joy']: state.joy,
//         [state.current === 'sadness' ? '_temp' : 'sadness']: state.sadness,
//         [state.current === 'void' ? '_temp' : 'void']: state.void

//       }

//     default:
//       return state
//   }
// }