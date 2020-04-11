import React from 'react'

import style from './radio-button.css'

function Component(props) {

    return (
        <div className={style.container}>
            <input className={style.field} type="radio" id={props.value} name={props.name} value={props.value} />
            <label className={style.label} htmlFor={props.value}>{props.title}</label>
        </div>
    )
}

export default Component
