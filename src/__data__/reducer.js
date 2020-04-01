import * as types from './actions-types'

const initialState = {
  isLoading: false,
  isRequestError: false,
}

function reducer(state = initialState, action) {

  switch (action.type) {
    case types.GET_RESIDENTS_LIST: {
      return { ...state, isLoading: true }
    }
    case types.GET_RESIDENTS_LIST_SUCCESS: {
      return {
        ...state,
        residents: { ...action.data },
        isLoading: false,
        isRequestError: false,
      }
    }
    case types.GET_RESIDENTS_LIST_FAIL: {
      return {
        ...state,
        isLoading: false,
        isRequestError: true,
      }
    }
    case types.GET_BUILDINGS_LIST: {
      return { ...state, isLoading: true }
    }
    case types.GET_BUILDINGS_LIST_SUCCESS: {
      return {
        ...state,
        buildings: { ...action.data },
        isLoading: false,
        isRequestError: false,
      }
    }
    case types.GET_BUILDINGS_LIST_FAIL: {
      return {
        ...state,
        buildings: { ...action.data },
        isLoading: false,
        isRequestError: true,
      }
    }
    case types.GET_BUILDING: {
      return { ...state, isLoading: true }
    }
    case types.GET_BUILDING_SUCCESS: {
      return {
        ...state,
        building: { ...action.data.building },
        isLoading: false,
        isRequestError: false,
      }
    }
    case types.GET_BUILDING_FAIL: {
      return {
        ...state,
        building: { ...action.data.building },
        isLoading: false,
        isRequestError: true,
      }
    }
    default:
      return state
  }
}

export default reducer
