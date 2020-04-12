import React from 'react'

import style from './radio-button.css'

function Component(props) {

    return (
        <div className={style.container}>
            <input
                {...props.input}
                className={style.field}
                type="radio"
                id={props.input.value}
            />
            <label className={style.label} htmlFor={props.input.value}>{props.label}</label>
        </div>
    )
}

export default Component
