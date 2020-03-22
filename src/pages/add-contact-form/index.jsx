import React from 'react'
import {Field, reduxForm} from 'redux-form'
import classNames from 'classnames'

import { TextInput, SelectInput, PhoneInput, Action } from './components'
import style from './style.css'

const homeOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function Component() {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <a className={style.goListLink} href='/residents-list'>← К списку жильцов</a>
            </header>
            <div className={style.content}>
                <h1 className={style.title}>Введите информацию о жильце</h1>
                <form onSubmit={()=>{console.log('submit')}}>
                    <div className={style.fieldsSection}>
                        <Field
                            name="name"
                            component={TextInput}
                            type="text"
                            label="Имя"
                            size="lg"
                        />
                    </div>
                    <div className={style.fieldsSection}>
                        <Field
                            name="surname"
                            component={TextInput}
                            type="text"
                            label="Фамилия"
                            size="lg"
                        />
                    </div>
                    <div className={classNames(style.fieldsSection, style.hasBorder, style.inlineFields)}>
                        <Field
                            name="homeNumber"
                            component={SelectInput}
                            label="Дом"
                            options={homeOptions}
                            size="md"
                            placeholder="⛪️"
                        />
                        <Field
                            name="flatNumber"
                            component={TextInput}
                            type="text"
                            label="Квартира"
                            size="xs"
                        />
                    </div>
                    <div className={classNames(style.fieldsSection, style.hasBorder, style.inlineFields)}>
                        <Field
                            name="entranceNumber"
                            component={TextInput}
                            type="text"
                            label="Подъезд"
                            size="sm"
                        />
                        <div className={style.growField}>
                            <Field
                                name="floorNumber"
                                component={TextInput}
                                type="text"
                                label="Этаж"
                                size="sm"
                            />
                        </div>
                        <Field
                            name="riserNumber"
                            component={TextInput}
                            type="text"
                            label="Стояк"
                            size="xs"
                        />
                    </div>
                    <div className={classNames(style.fieldsSection, style.hasBorder)}>
                        <Field
                            name="phoneNumber"
                            component={PhoneInput}
                            type="text"
                            label="Телефон"
                            value=''
                            placeholder="+7 ()"
                        />
                    </div>
                    <div className={style.fieldsSection}>
                        <Field
                            name="email"
                            component={TextInput}
                            type="text"
                            label="Email"
                            size="lg"
                            placeholder="@"
                        />
                    </div>
                    <div className={style.actions}>
                        <Action type="submit" text="Добавить" />
                    </div>
                </form>
            </div>
        </div>
    )
}

Component = reduxForm ({
    form: 'AddContactForm',
}) (Component)

export default Component
