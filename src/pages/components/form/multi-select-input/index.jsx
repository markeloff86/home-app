import React from 'react'
import classNames  from 'classnames'
import Multiselect from 'react-widgets/lib/Multiselect'

import style from './style.css'
import DropdownList from "../../../add-news-form/home-select-input";
import {NEWS_BUILDING_SELECT_ITEMS} from "../../../../__data__/constants";

function Component(props) {
    const { input, meta } = props
    const isInvalid = meta.invalid && meta.visited

    return (
        <div className={style.container}>
            <Multiselect
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                onChange={input.onChange}
                defaultValue={props.value}
                data={props.options}
                filter
                textField='label'
                valueField='value'

                className={classNames(
                    style.field,
                    style[`size-${props.size}`],
                    isInvalid && style.invalid,
                    meta.active && style.active,
                )}

            />
            <label className={style.label}>{props.label}</label>
        </div>
    )
}

export default Component
