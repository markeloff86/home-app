import React from 'react'

import { default as Residents } from './residents'
import style from './style.css'

function Component(props) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1 className={style.pageTitle}>Жильцы</h1>
                <a className={style.addContactLink} href='/add-contact'>+ Добавить жильцов</a>
            </div>
            <Residents residentsList={props.residentsList} />
        </div>
    )
}

export default Component
