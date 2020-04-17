import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Field } from 'redux-form'
import _ from 'lodash'

import { Checkbox } from '../../../components/form'
import formStyle from '../../../components/form/style.css'
import { makeBuildingsList } from "../../../../__data__/selectors"

function Component(props) {

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

const mapStateToProps = createStructuredSelector({
    buildingsList: makeBuildingsList(),
})


const withConnect = connect(
    mapStateToProps,

)

export default compose(withConnect)(Component)
