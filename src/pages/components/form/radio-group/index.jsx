import React from 'react'
import _ from 'lodash'

import style from './style.css'
import RadioButton from './radio-button'

const items = [
    {
        value: 'all',
        name: 'group2',
        title: 'Все 13 этажей',
    },
    {
        value: 'some',
        name: 'group2',
        title: 'Некоторые этажи',
    }
]

function Component(props) {

    return (
        <div className={style.container}>
            {_.map(items, i => <RadioButton value={i.value} name={i.name} title={i.title} />)}
            {/*<input {...props.input} id={props.id} type='checkbox' className={style.field} />*/}
            {/*<label for={props.id} className={style.label}>{props.label}</label>*/}

        </div>
    )
}

export default Component;