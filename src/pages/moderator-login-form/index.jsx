import React, { useState } from 'react'
import axios from 'axios'
import _ from 'lodash'

import { MODERATOR_STORAGE_NAME } from '../../__data__/constants'

import logo from './logo.svg'
import style from './style.css'

function Component() {
    const [username, setName] = useState('test_employee')
    const [password, setPassword] = useState('test12345')

    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleChangePassword(e){
        setPassword(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://89.223.30.70:8000/api/auth', {username, password})
            .then((response) => {
                const token = _.get(response, ['data', 'token'] )
                localStorage.setItem(MODERATOR_STORAGE_NAME, token)
                window.location.href = '/residents-list'
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src={logo} className={style.logo} />
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className={style.fieldWrapper}>
                        <input
                            id="name"
                            className={style.input}
                            type="text"
                            value={username}
                            onChange={handleChangeName}
                        />
                        <label htmlFor="name" className={style.label}>Логин</label>
                    </div>
                    <div className={style.fieldWrapper}>
                        <input
                            id="password"
                            className={style.input}
                            type="password"
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <label htmlFor="password" className={style.label}>Пароль</label>
                    </div>
                    <button type="submit" className={style.signInButton}>Войти в систему</button>
                    <a className={style.resetPassLink}>Восстановить пароль</a>
                </form>
            </div>
        </div>
    )
}

export default Component
