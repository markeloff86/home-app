import { createSelector } from 'reselect'
import _ from 'lodash'

import { declOfNum } from './utils'

const app = state => _.get(state, 'app', {})
const form = state => _.get(state, 'form', {})

export const makeIsLoading = () =>
    createSelector(app, slice => _.get(slice, 'isLoading'))

export const makeIsRequestError = () =>
    createSelector(app, slice => _.get(slice, 'isRequestError'))

export const makeResidentsList = () =>
    createSelector(app, slice => _.get(slice, 'residents'))

export const makeBuildingsList = (hasAllBuildings = false) =>
    createSelector(app, slice => {
        const buildings = _.get(slice, 'buildings')
        const list = _.map(buildings, item => ({ value: item.id, label: `${item.street}, ${item.number}` }))
        if (hasAllBuildings) {

            const buildingsId = _.map(list, i => i.value)
            const allBuildingsKey = buildingsId.toString()
            const buildingText = declOfNum(buildingsId.length, ['дом', 'дома', 'домов'])
            const allBuildingsValue = `Все ${buildingsId.length} ${buildingText}`
            const option = {
                value: allBuildingsKey,
                label: allBuildingsValue,
            }
            return ([ option, ...list ])
        }
        return list
    })

export const makeBuildingFlats = () =>
    createSelector(app, slice => {
        const porches = _.get(slice, 'building.flats')
        return _.map(porches, item => ({ value: item.id, label: item.number }))
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

export const makeContactFormData = () =>
    createSelector(form, slice => {
        const values = _.get(slice, 'AddContactForm.values')
        const data = {
            first_name: _.get(values, 'name'),
            last_name: _.get(values, 'surname'),
            phone_number: _.get(values, 'phoneNumber'),
            email: _.get(values, 'email'),
            flat: _.get(values, 'flatNumber.value' )
        }

        console.log('data', data)

        return data
    })