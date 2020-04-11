import React from 'react'
import _ from 'lodash'

import style from './style.css'
import RadioButton from './radio-button'

const items = [
    {
        value: 'home',
        name: 'group',
        title: 'На весь дом',
    },
    {
        value: 'apartments',
        name: 'group',
        title: 'Квартиры',
    },
    {
        value: 'entrances',
        name: 'group',
        title: 'Подъезды',
    },
    {
        value: 'floors',
        name: 'group',
        title: 'Этажи',
    },
    {
        value: 'risers',
        name: 'group',
        title: 'Стояки',
    },
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
