  const initialState = {
  modalMenu: {
    active: false
  },
  sideMenu: {
    active: false
  }
}

export const reducerModal = (state: any = initialState, action: any): any => {

  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        modalMenu: {
          active: true
        },
        sideMenu: {
          active: state.sideMenu.active
        }
      }
    case 'CLOSE_MODAL':
      return {
        modalMenu: {
          active: false
        },
        sideMenu: {
          active: state.sideMenu.active
        }
      }
    case 'OPEN_MENU':
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: true
        }
      }
    case 'CLOSE_MENU':
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: false
        }
      }
    default:
      return state
  }
}