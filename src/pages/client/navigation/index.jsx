import React from 'react';

import style from './style.css'
import { default as MenuItem } from './menu-item'

function Component() {
    return (
        <div className={style.container}>
            <MenuItem text='Новости' />
            <MenuItem text='Общение' />
            <MenuItem text='Услуги' />
            <MenuItem text='Вокруг' />
        </div>
    );
}

export default Component;
