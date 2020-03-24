import { createSelector } from 'reselect'
import _ from 'lodash'

const app = state => _.get(state, 'app', {})
const form = state => _.get(state, 'form', {})

export const makeResidentsList = () =>
    createSelector(app, slice => _.get(slice, 'residents'))

export const makeBuildingsList = () =>
    createSelector(app, slice => {
        const list = _.get(slice, 'buildings')
        return _.map(list, item => ({ value: item.id, label: `${item.street}, ${item.number}` }))
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
