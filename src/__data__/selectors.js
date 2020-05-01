import { createSelector } from 'reselect'
import _ from 'lodash'

import { declOfNum } from './utils'
import { NEWS_BUILDING_SELECT_ITEMS } from './constants'

const app = state => _.get(state, 'app', {})
const form = state => _.get(state, 'form', {})

export const makeIsLoading = () =>
    createSelector(app, slice => _.get(slice, 'isLoading'))

export const makeIsRequestError = () =>
    createSelector(app, slice => _.get(slice, 'isRequestError'))

export const makeResidentsList = () =>
    createSelector(app, slice => _.get(slice, 'residents'))

export const makeContactBuildingsList = (hasAllBuildings = false) =>
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

export const makeNewsFloorSelectItems = () =>
    createSelector(app, slice => {
        const floorsCount = _.get(slice, 'building.floor_count')
        const floorText = declOfNum(floorsCount, ['этаж', 'этажа', 'этажей'])
        return [
            {
                value: 'all',
                label: `Все ${floorsCount} ${floorText}`,
            },
            {
                value: 'some',
                label: 'Некоторые этажи',
            },
        ]
    })

export const makeNewsPorchesSelectItems = () =>
    createSelector(app, slice => {
        const porchesCount = _.get(slice, 'building.porches', [])
        const porchesText = declOfNum(porchesCount.length, ['подъезд', 'подъезда', 'подъездов'])
        return [
            {
                value: 'all',
                label: `Все ${porchesCount.length} ${porchesText}`,
            },
            {
                value: 'some',
                label: 'Некоторые подъезды',
            },
        ]
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

        return data
    })

export const makeNewsBuildingsList = () =>
    createSelector(app, slice => {
        const buildings = _.get(slice, 'buildings')
        const list = _.map(buildings, item => ({ value: item.id, label: `${item.street}, ${item.number}` }))

        const buildingsId = _.map(list, i => i.value)
        const numberPrefix = declOfNum(buildingsId.length, ['-му', '-ум', '-ти'])
        const buildingText = declOfNum(buildingsId.length, ['дом', 'домам', 'домам'])
        const allBuildingsValue = `Всем ${buildingsId.length}${numberPrefix} ${buildingText}`
        const allBuildingsOption = {
            value: NEWS_BUILDING_SELECT_ITEMS.all,
            label: allBuildingsValue,
        }

        const someBuildingsOption = {
            value: NEWS_BUILDING_SELECT_ITEMS.some,
            label: 'Некоторым домам',
        }

        return ([ allBuildingsOption, someBuildingsOption, ...list ])

    })
//
// export const makeNewsBuildingsList = () =>
//     createSelector(app, slice => {
//         const buildings = _.get(slice, 'buildings')
//         const list = _.map(buildings, item => `H ${item.street}, ${item.number}`)
//
//         const buildingsId = _.map(list, i => i.value)
//         const numberPrefix = declOfNum(buildingsId.length, ['-му', '-ум', '-ти'])
//         const buildingText = declOfNum(buildingsId.length, ['дом', 'домам', 'домам'])
//         const allBuildingsValue = `H Всем ${buildingsId.length}${numberPrefix} ${buildingText}`
//
//         const someBuildingsValue = 'H Некоторым домам'
//
//         return ([ allBuildingsValue, someBuildingsValue, ...list ])
//     })

export const makeBuildingsList = () =>
    createSelector(app, slice => {
        const buildings = _.get(slice, 'buildings')
        return _.map(buildings, item => ({ id: item.id, label: `${item.street}, ${item.number}` }))
    })