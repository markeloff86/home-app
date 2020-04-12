import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import {RadioGroupMenu} from '../../../components/form'
import formStyle from '../../../components/form/style.css'
import { makeBuildingsList } from "../../../../__data__/selectors"

function Component(props) {

    return (
        <div className={formStyle.fieldsSection}>
            <RadioGroupMenu name='buildingFieldsMenuField' />
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
