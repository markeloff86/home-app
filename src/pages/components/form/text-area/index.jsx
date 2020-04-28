import React from 'react'
import classNames from 'classnames'

import style from './style.css'

function Component(props) {
    const isInvalid = props.meta.invalid && props.meta.visited

    return (
        <div>
            <div className={style.container}>
                <textarea {...props.input} className={classNames(
                    style.field,
                    style.textarea,
                    isInvalid && style.invalid
                )} />
                <label className={style.label}>{props.label}</label>
            </div>
            {isInvalid && <div className={style.errorMessage}>{props.meta.error}</div>}
        </div>
    )
}

export default Component;
