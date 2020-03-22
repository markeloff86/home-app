import axios from 'axios'

import { MODERATOR_STORAGE_NAME } from './constants'
import { getToken } from './utils'

import * as types from './actions-types'

export const fetchgetResidentsList = () => ({ type: types.GET_RESIDENTS_LIST })
export const fetchgetResidentsListSuccess = (data) => ({ type: types.GET_RESIDENTS_LIST_SUCCESS, data })
export const fetchgetResidentsListFail = (error) => ({ type: types.GET_RESIDENTS_LIST_FAIL, error })

export const getResidentsList = buildingId => dispatch => {
    dispatch(fetchgetResidentsList())

    return axios({
        method: 'GET',
        headers: {
            'authorization': `Token ${getToken(MODERATOR_STORAGE_NAME)}`,
            'Content-Type': 'application/json',
        },
        url: `http://89.223.30.70:8000/api/residents?building_id=${buildingId}`,
    })
        .then(response => {
            dispatch(fetchgetResidentsListSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchgetResidentsListFail(error))
        })
}
// export const fetchgetResidentsList = buildingId => {
//     return {
//         type: types.GET_RESIDENTS_LIST,
//         buildingId,
//     }

    // return axios({
    //     method: 'GET',
    //     headers: {
    //         'authorization': `Token ${getToken(MODERATOR_STORAGE_NAME)}`,
    //         'Content-Type': 'application/json',
    //     },
    //     url: `http://89.223.30.70:8000/api/residents?building_id=${buildingId}`,
    // })
    //     .then(response => {
    //         console.log('response', response)
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //     })
// }

// Получить здание

// return axios({
//   method: 'GET',
//   headers: {
//     'authorization': 'Token a7e82a37096fed9de8567be2cc44be3c8d28361f',
//     'Content-Type': 'application/json',
//   },
//   url: 'http://89.223.30.70:8000/api/buildings/1',
// })
