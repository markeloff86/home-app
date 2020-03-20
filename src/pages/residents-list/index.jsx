import React, { useEffect } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { compose } from 'redux'

import logo from '../../theme/logo.png'
import { getResidentsList } from '../../__data__/actions'

import { Menu, Content } from './components'
import style from './style.css'

function Component(props) {
    useEffect(() => {
        props.getResidentsList('1')
    })

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

const mapDispatchToProps = {
    getResidentsList,
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(Component)

