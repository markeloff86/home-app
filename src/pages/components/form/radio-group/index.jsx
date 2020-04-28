import React from 'react'
import _ from 'lodash'
import {Field} from 'redux-form'

import style from './style.css'
import RadioButton from './radio-button'

function Component(props) {
    // const isInvalid = props.meta.invalid

    return (
        <div>
            <div className={style.container}>
                {_.map(props.items, i => (
                    <Field
                        name={props.childName}
                        component={RadioButton}
                        type="radio"
                        label={i.label}
                        value={i.value}
                    />
                ))}
            </div>
            {/*{isInvalid && <div className={style.errorMessage}>{props.meta.error}</div>}*/}
        </div>
    )
}

export default Component;
