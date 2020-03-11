import React from 'react'

import style from './style.css'

function Component(props) {
    const { title, description } = props

    return (
        <div className={style.container}>
            <h2>News</h2>
        </div>
    )
}

export default Component;
