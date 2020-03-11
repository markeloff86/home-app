import React from 'react'

import style from './style.css'
import { default as Item } from './item'

function Component() {
    return (
        <div className={style.container}>
            <Item text='Чаты' />
            <Item text='Соседи' />
            <Item text='Обратная связь' />
        </div>
    );
}

export default Component;
