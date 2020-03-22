import * as types from './actions-types'

export const initialState = {}

function reducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_RESIDENTS_LIST: {
        return state
    }
    case types.GET_RESIDENTS_LIST_SUCCESS: {
      return { ...state, residents: { ...action.data } }
    }
    case types.GET_BUILDINGS_LIST: {
      return state
    }
    case types.GET_BUILDINGS_LIST_SUCCESS: {
      return { ...state, buildings: { ...action.data } }
    }
    case types.GET_BUILDING: {
      return state
    }
    case types.GET_BUILDING_SUCCESS: {
      return { ...state, building: { ...action.data.building } }
    }
    default:
      return state
  }
}

export default reducer
