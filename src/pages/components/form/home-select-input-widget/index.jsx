import React from 'react'
import ReactSelect from 'react-select'
import classNames  from 'classnames'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getBuilding } from '../../../../__data__/actions'

import style from './style.css'

function Component(props) {
    const handleChange = e => {
        props.input.onChange(e)
        props.makeRequest && props.getBuilding(e.value)
    }

    return (
        <div className={style.container}>
            <ReactSelect
                {...props}
                value={props.selectedOption}
                onChange={handleChange}
                options={props.options}
                className={classNames(style.field, style[`size-${props.size}`])}
            />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

const mapDispatchToProps = {
    getBuilding,
}

const withConnect = connect(
    null,
    mapDispatchToProps,
)

export default compose(withConnect)(Component)
