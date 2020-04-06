import React from 'react'
import classNames from 'classnames'

import style from './style.css'

function Component(props) {
    console.log('value', props.value)
    return (
        <div className={style.container}>
            <input {...props.input} className={classNames(style.field, style[`size-${props.size}`])} />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component;
