import React from 'react'
import _ from 'lodash'
import {Field} from 'redux-form'

import style from './style.css'
import RadioButton from './radio-button'

function Component(props) {

    return (
        <div className={style.container}>
            {_.map(props.items, i => (
                <Field
                    name={props.name}
                    component={RadioButton}
                    type="radio"
                    label={i.label}
                    value={i.value}
                />
            ))}
        </div>
    )
}

export default Component;
