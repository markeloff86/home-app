import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import {Field, reduxForm, getFormValues} from 'redux-form'
import classNames from 'classnames'
import _ from 'lodash'

import { getBuildingsList } from '../../__data__/actions'
import { MODERATOR_STORAGE_NAME, NEWS_TYPES_LIST } from '../../__data__/constants'
import { getToken } from '../../__data__/utils'
import { TextInput, TextArea, Checkbox, Action, RadioGroupMenu, SelectInput, RadioGroup } from '../components/form'
import formStyle from '../components/form/style.css'
import {
    makeBuildingFlats,
    makeBuildingPorches,
    makeBuildingPipes,
    makeBuildingFloorCount,
    makeContactFormData,
} from "../../__data__/selectors"

import FormFactory from './form-factory'
import HomeSelectInput from './home-select-input'
import style from './style.css'

function Component(props) {
    const token = getToken(MODERATOR_STORAGE_NAME)
    const buildingSelectValue = _.get(props, 'formValues.homeNumber.value')

    useEffect(() => {
        props.getBuildingsList(token)
    }, [token])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={formStyle.container}>
            <header className={formStyle.header}>
                <a className={formStyle.goListLink} href='/news-list'>← К списку объявлений</a>
            </header>
            <div className={formStyle.content}>
                <h1 className={formStyle.title}>Укажите кому и о чем хотите рассказать</h1>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={classNames(formStyle.fieldsSection, formStyle.hasBorder)}>
                        <Field
                            name="homeNumber"
                            component={HomeSelectInput}
                            label="Дом"
                            size="md"
                            placeholder="H"
                            required
                        />
                    </div>
                    <FormFactory buildingValue={buildingSelectValue} />


                    <div className={formStyle.delimiter} />
                    <div className={formStyle.fieldsSection}>
                        <Field
                            name="newsTitle"
                            component={TextInput}
                            type="text"
                            label="Заголовок объявления"
                            value=''
                            placeholder=""
                            size='xlg'
                        />
                    </div>
                    <div className={formStyle.fieldsSection}>
                        <Field
                            name="newsDescription"
                            component={TextArea}
                            type="text"
                            label="Содержание"
                            value=''
                            placeholder=""
                        />
                    </div>
                    <div className={formStyle.fieldsSection}>
                        <RadioGroup
                            name="newsType"
                            items={NEWS_TYPES_LIST}
                        />
                    </div>
                    <div className={formStyle.actions}>
                        <Action type="submit" text="Отправить объявление" />
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    buildingFlats: makeBuildingFlats(),
    buildingPorches: makeBuildingPorches(),
    buildingPipes: makeBuildingPipes(),
    buildingFloorCount: makeBuildingFloorCount(),
    contactFormData: makeContactFormData(),
    formValues: getFormValues('AddNewsForm'),
})

const mapDispatchToProps = {
    getBuildingsList,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)

Component = reduxForm ({
    form: 'AddNewsForm',
}) (Component)

export default compose(withConnect)(Component)
