import React from 'react'
import classNames from 'classnames'

import logo from '../../theme/logo.png'
import { Menu, Content } from './components'

import style from './style.css'

function Component() {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <img src={logo} className={style.logo} alt="logo" />
            </header>
            <div className={style.contentWrapper}>
                <Menu />
                <Content />
            </div>
        </div>
    )
}

export default Component
