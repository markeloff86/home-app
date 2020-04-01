import React from 'react'

import style from './style.css'
import Image from './loader.gif'

function Component() {
    return (
        <div className={style.container}>
            <div className={style.loaderWrapper}>
                <img className={style.image} src={Image} alt="" />
                <div className={style.text}>Еще чуть-чуть</div>
            </div>
        </div>
    )
}


export default Component
