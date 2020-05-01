import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Field, reduxForm, getFormValues } from 'redux-form'
import classNames from 'classnames'
import _ from 'lodash'
import Multiselect from 'react-widgets/lib/Multiselect'

import { getBuildingsList } from '../../__data__/actions'
import { MODERATOR_STORAGE_NAME, NEWS_TYPES_LIST } from '../../__data__/constants'
import { getToken } from '../../__data__/utils'
import { TextInput, TextArea, Action, RadioGroup } from '../components/form'
import { required } from '../components/form/validation'
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
import submit from './submit'
import style from './style.css'

function Component(props) {
    const token = getToken(MODERATOR_STORAGE_NAME)
    const buildingSelectValue = _.get(props, 'formValues.homeNumber.value')

    useEffect(() => {
        props.getBuildingsList(token)
    }, [token])

    return (
        <div className={formStyle.container}>
            <header className={formStyle.header}>
                <a className={formStyle.goListLink} href='/news-list'>← К списку объявлений</a>
            </header>
            <div className={formStyle.content}>
                <h1 className={formStyle.title}>Укажите кому и о чем хотите рассказать</h1>
                <form className={style.form}>
                    <Multiselect />
                    <div className={classNames(formStyle.fieldsSection, formStyle.hasBorder)}>
                        <Field
                            name="homeNumber"
                            component={HomeSelectInput}
                            label="Дом"
                            size="md"
                            placeholder="H"
                            validate={[ required ]}
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
                            validate={[ required ]}
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
                            validate={[ required ]}
                        />
                    </div>
                    <div className={formStyle.fieldsSection}>
                        <RadioGroup
                            childName="newsTypeItem"
                            name="newsType"
                            items={NEWS_TYPES_LIST}
                            validate={[ required ]}
                        />
                    </div>
                </form>
                <div className={formStyle.actions}>
                    <Action type="button" text="Отправить объявление" />
                </div>
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

Component = reduxForm({
    form: 'AddNewsForm',
    onSubmit: submit
}) (Component)

export default compose(withConnect)(Component)
