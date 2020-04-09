import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import ReactSelect from 'react-select'
import _ from 'lodash'

import logo from '../../theme/logo.png'
import { getBuildingsList, getResidentsList } from '../../__data__/actions'
import { makeContactBuildingsList, makeResidentsList } from '../../__data__/selectors'
import {getToken} from '../../__data__/utils'
import {MODERATOR_STORAGE_NAME} from '../../__data__/constants'

import { Menu, Content } from './components'
import style from './style.css'

function Component(props) {
    const token = getToken(MODERATOR_STORAGE_NAME)
    const defaultBuilding = props.buildingsList[0]['value']

    const [currentBuildingId, setBuilding] = React.useState(defaultBuilding)
    React.useEffect(() => {
        setBuilding(defaultBuilding)
    }, [defaultBuilding])

    const handleChangeBuilding = (e) => {
        setBuilding(e.value)
    }

    useEffect(() => {
        props.getBuildingsList(token)
        currentBuildingId && props.getResidentsList(currentBuildingId)
    }, [token, currentBuildingId])

    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.logoWrapper}>
                    <img src={logo} className={style.logo} alt="logo" />
                </div>
                { props.buildingsList &&
                    <ReactSelect
                        onChange={handleChangeBuilding}
                        options={props.buildingsList}
                        placeholder="H"
                        className={style.buildingField}
                    />
                }
            </header>
            <div className={style.contentWrapper}>
                <Menu />
                <Content residentsList={props.residentsList} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    buildingsList: makeContactBuildingsList(true),
    residentsList: makeResidentsList(),
})

const mapDispatchToProps = {
    getBuildingsList,
    getResidentsList,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

export default compose(withConnect)(Component)

