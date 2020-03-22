import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'

import { getStatus, formatPhoneNumber } from './utils'
import style from './style.css'

function Component(props) {
    return (
        <div className={style.container}>
            <div className={style.head}>
                <div className={classNames(style.headItem, style.name)}>Имя</div>
                <div className={classNames(style.headItem, style.homeNumber)}>Дом</div>
                <div className={classNames(style.headItem, style.phone)}>Телефон</div>
                <div className={classNames(style.headItem, style.flatNumber)}>Кв.</div>
                <div className={classNames(style.headItem, style.statusWrapper)}>Статус</div>
            </div>
            {_.map(props.residentsList, (resident, key) => (
                <div key={key} className={style.residentItem}>
                    <div className={style.name}>{`${resident['last_name']} ${resident['first_name']}`}</div>
                    <div className={style.homeNumber}>123312</div>
                    <div className={style.phone}>{formatPhoneNumber(resident['phone_number'])}</div>
                    <div className={style.flatNumber}>135</div>
                    <div className={style.statusWrapper}>
                        <div className={style.status}>{getStatus(resident['status'])}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Component
