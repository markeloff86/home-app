import { createSelector } from 'reselect'
import _ from 'lodash'

const app = state => _.get(state, 'app', {})

export const makeResidentsList = () =>
    createSelector(app, slice => _.get(slice, 'residents'))

export const makeBuildingsList = () =>
    createSelector(app, slice => {
        const list = _.get(slice, 'buildings')
        return _.map(list, item => ({ value: item.id, label: `${item.street}, ${item.number}` }))
    })

export const makeBuildingPorches = () =>
    createSelector(app, slice => {
        const porches = _.get(slice, 'building.porches')
        return _.map(porches, item => ({ value: item.id, label: item.number }))
    })

export const makeBuildingPipes = () =>
    createSelector(app, slice => {
        const pipes = _.get(slice, 'building.pipes')
        return _.map(pipes, item => ({ value: item.id, label: item.name }))
    })

export const makeBuildingFloorCount = () =>
    createSelector(app, slice => {
        const floorsCount = _.get(slice, 'building.floor_count')
        return _.map(new Array(floorsCount), (item, key) => ({ value: key + 1, label: key + 1 }))
    })
