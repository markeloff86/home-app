import React from 'react';
import style from './style.css';

import { default as Menu } from './menu'

function Component() {
    return (
        <div className={style.container}>
            <Menu />
            <span>Content</span>
        </div>
    );
}

export default Component;
