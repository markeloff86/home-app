import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import logo from '../../theme/logo.png'
import { getResidentsList } from '../../__data__/actions'
import { makeResidentsList } from '../../__data__/selectors'

import { Menu, Content } from './components'
import style from './style.css'

const buildingName = '1'

function Component(props) {
    useEffect(() => {
        props.getResidentsList(buildingName)
    }, [buildingName])

    return (
        <div className={style.container}>
            <header className={style.header}>
                <img src={logo} className={style.logo} alt="logo" />
            </header>
            <div className={style.contentWrapper}>
                <Menu />
                <Content residentsList={props.residentsList} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    residentsList: makeResidentsList(),
})

const mapDispatchToProps = {
    getResidentsList,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

export default compose(withConnect)(Component)

