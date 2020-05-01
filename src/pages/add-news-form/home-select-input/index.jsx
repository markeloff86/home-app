import React from 'react'
import classNames  from 'classnames'
import { connect } from 'react-redux'
import { compose } from 'redux'
import _ from 'lodash'
import DropdownList from 'react-widgets/lib/DropdownList'

import {createStructuredSelector} from "reselect"
import { makeNewsBuildingsList } from "../../../__data__/selectors"
import { getBuilding } from '../../../__data__/actions'
import { NEWS_BUILDING_SELECT_ITEMS } from '../../../__data__/constants'

import style from './style.css'

function Component(props) {
    const { input, data, valueField, textField } = props
    const isInvalid = props.meta.invalid && props.meta.visited

    const handleChange = e => {
        props.input.onChange(e)
        if (!_.has(NEWS_BUILDING_SELECT_ITEMS, e.value)) {
            props.getBuilding(e.value)
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <DropdownList
                    filter
                    value={props.input.value}
                    textField='label'
                    valueField='value'
                    onChange={handleChange}
                    data={props.buildingsList}
                    className={classNames(style.field, style[`size-${props.size}`])}
                />
                <label className={style.label}>{props.label}</label>
            </div>
            {isInvalid && <div className={style.errorMessage}>{props.meta.error}</div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    buildingsList: makeNewsBuildingsList(),
})

const mapDispatchToProps = {
    getBuilding,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

export default compose(withConnect)(Component)
