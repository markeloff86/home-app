import React from 'react'

import style from './style.css'

function Component(props) {
    return (
        <button className={style.container} type={props.type}>{props.text}</button>
    )
}

export default Component
