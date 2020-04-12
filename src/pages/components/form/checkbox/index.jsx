import React from 'react'

import style from './style.css'

function Component(props) {

    return (
        <div className={style.container}>
            <input {...props.input} id={props.id} type='checkbox' className={style.field} />
            <label htmlFor={props.id} className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component;
