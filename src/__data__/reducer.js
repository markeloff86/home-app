import * as types from './actions-types'

const initialState = {}

function reducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_RESIDENTS_LIST: {
        return state
    }
    case types.GET_RESIDENTS_LIST_SUCCESS: {
      console.log('action', action)
      return { ...state, residents: { ...action.data } }
    }
    default:
      return state
  }
}

export default reducer
