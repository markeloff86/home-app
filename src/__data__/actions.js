import axios from 'axios'

import { MODERATOR_STORAGE_NAME } from './constants'
import { getToken } from './utils'

import * as types from './actions-types'

export const fetchGetResidentsList = () => ({ type: types.GET_RESIDENTS_LIST })
export const fetchGetResidentsListSuccess = (data) => ({ type: types.GET_RESIDENTS_LIST_SUCCESS, data })
export const fetchGetResidentsListFail = (error) => ({ type: types.GET_RESIDENTS_LIST_FAIL, error })

export const fetchGetBuildingsList = () => ({ type: types.GET_BUILDINGS_LIST })
export const fetchGetBuildingsListSuccess = (data) => ({ type: types.GET_BUILDINGS_LIST_SUCCESS, data })
export const fetchGetBuildingsListFail = (error) => ({ type: types.GET_BUILDINGS_LIST_FAIL, error })

export const fetchGetBuilding = () => ({ type: types.GET_BUILDING })
export const fetchGetBuildingSuccess = (data) => ({ type: types.GET_BUILDING_SUCCESS, data })
export const fetchGetBuildingFail = (error) => ({ type: types.GET_BUILDING_FAIL, error })

export const getResidentsList = buildingsId => dispatch => {
    dispatch(fetchGetResidentsList())

    return axios({
        method: 'GET',
        headers: {
            'authorization': `Token ${getToken(MODERATOR_STORAGE_NAME)}`,
            'Content-Type': 'application/json',
        },
        url: `http://89.223.30.70:8000/api/residents?buildings_id=${buildingsId}`,
    })
        .then(response => {
            dispatch(fetchGetResidentsListSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchGetResidentsListFail(error))
        })
}

export const getBuildingsList = token => dispatch => {
    dispatch(fetchGetBuildingsList())

    return axios({
        method: 'GET',
        headers: {
            'authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        },
        url: `http://89.223.30.70:8000/api/buildings`,
    })
        .then(response => {
            dispatch(fetchGetBuildingsListSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchGetBuildingsListFail(error))
        })
}

export const getBuilding = id => dispatch => {
    dispatch(fetchGetBuildingsList())

    return axios({
        method: 'GET',
        headers: {
            'authorization': `Token ${getToken(MODERATOR_STORAGE_NAME)}`,
            'Content-Type': 'application/json',
        },
        url: `http://89.223.30.70:8000/api/buildings/${id}`,
    })
        .then(response => {
            dispatch(fetchGetBuildingSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchGetBuildingFail(error))
        })
}
