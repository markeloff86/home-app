import React from 'react'
import ReactSelect from 'react-select'
import classNames  from 'classnames'

import style from './style.css'

function Component(props) {
    return (
        <div className={style.container}>
            <ReactSelect
                {...props}
                value={props.selectedOption}
                onChange={props.input.onChange}
                options={props.options}
                className={classNames(style.field, style[`size-${props.size}`])}
            />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component
