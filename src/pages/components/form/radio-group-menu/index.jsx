import React from 'react'
import _ from 'lodash'
import {Field} from 'redux-form'

import style from './style.css'
import RadioButton from './radio-button'

const items = [
    {
        id: 'home',
        label: 'На весь дом',
    },
    {
        id: 'apartments',
        label: 'Квартиры',
    },
    {
        id: 'entrances',
        label: 'Подъезды',
    },
    {
        id: 'floors',
        label: 'Этажи',
    },
    {
        id: 'risers',
        label: 'Стояки',
    },
]

function Component(props) {

    return (
        <div className={style.container}>
            {_.map(items, i => (
                <Field
                    name={props.name}
                    component={RadioButton}
                    type="radio"
                    label={i.label}
                    value={i.id}
                />
            ))}
        </div>
    )
}

export default Component;
