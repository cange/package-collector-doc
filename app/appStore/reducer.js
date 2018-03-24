import { types } from './actions'

export const initialState = {
  navOpen: true,
  activePageId: ''
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NAV_TOGGLE:
      return {
        ...state,
        navOpen: !state.navOpen
      }
    case types.NAV_ACTIVE_ITEM:
      return {
        ...state,
        activePageId: action.id
      }
    default:
      return state
  }
}

export default appReducer
