const initialState = [{
  isDone: false,
  id: 0,
  key: 0,
  value: {
    header: '',
    content: ''
  }
}]

export const reducerCards = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case 'ADD_CARD':
      if (action.value.header !== '' && action.value.content !== '') {
        return [
          ...state, {
            isDone: true,
            key: state[state.length - 1].key + 1,
            id: state[state.length - 1].id + 1,
            value: action.value
          }
        ]
      }
      return state
    default:
      return state
  }
}

