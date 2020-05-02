import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Field } from 'redux-form'
import _ from 'lodash'

import { Checkbox } from '../../../components/form'
import formStyle from '../../../components/form/style.css'
import { makeBuildingsList, makeSomeBuildindsFieldsValies } from "../../../../__data__/selectors"

function Component(props) {
    console.log('values', props.values)
    return (
        <div className={formStyle.checkboxGroup}>
            {_.map(props.buildingsList, building => (
                <Field
                    name={`someBuildingsFields.${building.id}`}
                    component={Checkbox}
                    type="checkbox"
                    label={building.label}
                    value=''
                    id={building.id}
                />
            ))}
        </div>
    )
}

// TODO: Перенести проверку на одно заполненное поле в сабмит формы, а тут вывести сообщение о необходимости заполнить.

const mapStateToProps = createStructuredSelector({
    buildingsList: makeBuildingsList(),
    values: makeSomeBuildindsFieldsValies(),
})


const withConnect = connect(
    mapStateToProps,
)

export default compose(withConnect)(Component)
