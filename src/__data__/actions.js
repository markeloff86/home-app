import axios from 'axios'

import * as types from './actions-types'

export const fetchGetBuilding = (buildingId) => {
  return axios({
    method: 'GET',
    headers: {
      'authorization': 'Token a7e82a37096fed9de8567be2cc44be3c8d28361f',
      'Content-Type': 'application/json',
    },
    url: `http://89.223.30.70:8000/api/residents?building_id=${buildingId}`,
  })
      .then(response => {
        console.log('response', response)
      })
      .catch(err => {
        console.log('err', err)
      })
}

// Получить здание

// return axios({
//   method: 'GET',
//   headers: {
//     'authorization': 'Token a7e82a37096fed9de8567be2cc44be3c8d28361f',
//     'Content-Type': 'application/json',
//   },
//   url: 'http://89.223.30.70:8000/api/buildings/1',
// })
