import React from 'react'

import logo from './logo.svg';

import style from './style.css'

function Component() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src={logo} className={style.logo} />
                <div className={style.fieldWrapper}>
                    <input id="name" className={style.input} type="text" />
                    <label htmlFor="name" className={style.label}>Логин</label>
                </div>
                <div className={style.fieldWrapper}>
                    <input id="pass" className={style.input} type="password" />
                    <label htmlFor="pass" className={style.label}>Пароль</label>
                </div>
                <button className={style.signInButton}>Войти в систему</button>
                <a className={style.resetPassLink}>Восстановить пароль</a>
            </div>
        </div>
    )
}

export default Component;
