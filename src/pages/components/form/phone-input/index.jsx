import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import React, { useState } from "react"

import style from './style.css'

function Component(props) {
    const [value, setValue] = useState(props.value)

    function handleChange(value){
        props.input.onChange(value)
        setValue(value)
    }

    return (
        <div className={style.container}>
            <PhoneInput
                {...props}
                value={value}
                country="RU"
                countries={['RU']}
                international={false}
                showCountrySelect={false}
                onChange={handleChange}
            />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component
