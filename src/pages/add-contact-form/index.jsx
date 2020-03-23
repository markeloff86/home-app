import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import {Field, reduxForm} from 'redux-form'
import classNames from 'classnames'
import _ from 'lodash'

import { getBuildingsList, sendResident } from '../../__data__/actions'
import { MODERATOR_STORAGE_NAME } from '../../__data__/constants'
import { getToken } from '../../__data__/utils'

import { TextInput, SelectInput, HomeSelectInput, PhoneInput, Action } from './components'
import style from './style.css'
import {
    makeBuildingsList,
    makeBuildingFlats,
    makeBuildingPorches,
    makeBuildingPipes,
    makeBuildingFloorCount,
    makeContactFormData,
} from "../../__data__/selectors"

function Component(props) {
    const token = getToken(MODERATOR_STORAGE_NAME)

    useEffect(() => {
        props.getBuildingsList(token)
    }, [token])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.sendResident(props.contactFormData)
    }

    return (
        <div className={style.container}>
            <header className={style.header}>
                <a className={style.goListLink} href='/residents-list'>← К списку жильцов</a>
            </header>
            <div className={style.content}>
                <h1 className={style.title}>Введите информацию о жильце</h1>
                <form onSubmit={handleSubmit}>
                    <div className={style.fieldsSection}>
                        <Field
                            name="name"
                            component={TextInput}
                            type="text"
                            label="Имя"
                            size="lg"
                            required
                        />
                    </div>
                    <div className={style.fieldsSection}>
                        <Field
                            name="surname"
                            component={TextInput}
                            type="text"
                            label="Фамилия"
                            size="lg"
                            required
                        />
                    </div>
                    <div className={classNames(style.fieldsSection, style.hasBorder, style.inlineFields)}>
                        <Field
                            name="homeNumber"
                            component={HomeSelectInput}
                            label="Дом"
                            options={props.buildingsList}
                            size="md"
                            placeholder="H"
                            required
                        />
                        { !_.isEmpty(props.buildingFlats) &&
                            <Field
                                name="flatNumber"
                                component={SelectInput}
                                type="text"
                                label="Квартира"
                                size="sm"
                                options={props.buildingFlats}
                                placeholder=""
                                required
                            />
                        }
                    </div>
                    {/*{ !_.isEmpty(props.buildingPorches) &&*/}
                        {/*<div className={classNames(style.fieldsSection, style.hasBorder, style.inlineFields)}>*/}
                            {/*<Field*/}
                                {/*name="entranceNumber"*/}
                                {/*component={SelectInput}*/}
                                {/*options={props.buildingPorches}*/}
                                {/*type="text"*/}
                                {/*label="Подъезд"*/}
                                {/*size="sm"*/}
                                {/*required*/}
                            {/*/>*/}
                            {/*<div className={style.growField}>*/}
                                {/*<Field*/}
                                    {/*name="floorNumber"*/}
                                    {/*component={SelectInput}*/}
                                    {/*options={props.buildingFloorCount}*/}
                                    {/*type="text"*/}
                                    {/*label="Этаж"*/}
                                    {/*size="sm"*/}
                                    {/*required*/}
                                {/*/>*/}
                            {/*</div>*/}
                            {/*<Field*/}
                                {/*name="riserNumber"*/}
                                {/*component={SelectInput}*/}
                                {/*options={props.buildingPipes}*/}
                                {/*type="text"*/}
                                {/*label="Стояк"*/}
                                {/*size="xs"*/}
                                {/*required*/}
                            {/*/>*/}
                        {/*</div>*/}
                    {/*}*/}
                    <div className={classNames(style.fieldsSection, style.hasBorder)}>
                        <Field
                            name="phoneNumber"
                            component={PhoneInput}
                            type="text"
                            label="Телефон"
                            value=''
                            placeholder="+7 ()"
                        />
                    </div>
                    <div className={style.fieldsSection}>
                        <Field
                            name="email"
                            component={TextInput}
                            type="text"
                            label="Email"
                            size="lg"
                            placeholder="@"
                        />
                    </div>
                    <div className={style.actions}>
                        <Action type="submit" text="Добавить" />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    buildingsList: makeBuildingsList(),
    buildingFlats: makeBuildingFlats(),
    buildingPorches: makeBuildingPorches(),
    buildingPipes: makeBuildingPipes(),
    buildingFloorCount: makeBuildingFloorCount(),
    contactFormData: makeContactFormData(),
})

const mapDispatchToProps = {
    getBuildingsList,
    sendResident,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

Component = reduxForm ({
    form: 'AddContactForm',
}) (Component)

export default compose(withConnect)(Component)
