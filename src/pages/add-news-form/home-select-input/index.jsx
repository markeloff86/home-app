import React from 'react'
import ReactSelect from 'react-select'
import classNames  from 'classnames'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {createStructuredSelector} from "reselect"
import { makeNewsBuildingsList } from "../../../__data__/selectors"
import { getBuilding } from '../../../__data__/actions'

import style from './style.css'

function Component(props) {

    const handleChange = e => {
        props.input.onChange(e)
        // props.makeRequest && props.getBuilding(e.value)
    }

    return (
        <div className={style.container}>
            <ReactSelect
                {...props}
                value={props.selectedOption}
                onChange={handleChange}
                options={props.buildingsList}
                className={classNames(style.field, style[`size-${props.size}`])}
            />
            <label className={style.label}>{props.label}</label>
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
