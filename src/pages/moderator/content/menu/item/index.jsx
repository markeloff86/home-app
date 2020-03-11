import React from 'react';
import style from './style.css';

function Component(props) {
    return (
        <div className={style.container}>{props.text}</div>
    );
}

export default Component;
