import { createSelector } from 'reselect'
import _ from 'lodash'

const app = state => _.get(state, 'app', {})

export const makeResidentsList = () =>
    createSelector(app, slice => _.get(slice, 'residents'))
