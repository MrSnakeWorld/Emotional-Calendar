  const initialState = {
  modalMenu: {
    active: false
  },
  sideMenu: {
    active: false
  },
  regMenu: {
    active: true
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
        },
        regMenu: {
          active: state.regMenu.active
        }
      }
    case 'CLOSE_MODAL':
      return {
        modalMenu: {
          active: false
        },
        sideMenu: {
          active: state.sideMenu.active
        },
        regMenu: {
          active: state.regMenu.active
        }
      }
    case 'OPEN_MENU':
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: true
        },
        regMenu: {
          active: state.regMenu.active
        }
      }
    case 'CLOSE_MENU':
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: false
        },
        regMenu: {
          active: state.regMenu.active
        }
      }
    case 'OPEN_REG': 
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: state.sideMenu.active
        },
        regMenu: {
          active: true
        }
      }
    case 'CLOSE_REG':
      return {
        modalMenu: {
          active: state.modalMenu.active
        },
        sideMenu: {
          active: state.sideMenu.active
        },
        regMenu: {
          active: false
        }
      }
    default:
      return state
  }
}