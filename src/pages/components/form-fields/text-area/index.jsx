import React from 'react'
import classNames from 'classnames'

import style from './style.css'

function Component(props) {
    return (
        <div className={style.container}>
            <textarea {...props.input} className={classNames(style.field, style.textarea)} />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component;
