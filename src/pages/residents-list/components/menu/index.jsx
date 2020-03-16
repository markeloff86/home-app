import React from 'react'
import classNames from 'classnames'

import style from './style.css'

function Component() {
    return (
        <div className={style.container}>
            <a className={style.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14">
                    <path fill-rule="evenodd" d="M11 0H8c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h3c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1zm7 0h-3c-.552 0-1 .448-1 1v12c0 .552.448 1 1 1h3c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1zM4 0H1C.448 0 0 .448 0 1v12c0 .552.448 1 1 1h3c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1z"/>
                </svg>
            </a>
            <a className={style.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15">
                    <path fill-rule="evenodd" d="M12 0c1.933 0 3.5 1.567 3.5 3.5S13.933 7 12 7 8.5 5.433 8.5 3.5 10.067 0 12 0zM5 2.5c.56 0 1.08.15 1.53.42-.15 1.43.27 2.85 1.13 3.96-.5.96-1.5 1.62-2.66 1.62-1.657 0-3-1.343-3-3s1.343-3 3-3zm14 0c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.16 0-2.16-.66-2.66-1.62.86-1.11 1.28-2.53 1.13-3.96.45-.27.97-.42 1.53-.42zM5.5 12.75C5.5 10.68 8.41 9 12 9s6.5 1.68 6.5 3.75v1.75h-13v-1.75zM0 14.5V13c0-1.39 1.89-2.56 4.45-2.9-.59.68-.95 1.62-.95 2.65v1.75H0zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65 2.56.34 4.45 1.51 4.45 2.9v1.5z"/>
                </svg>
            </a>
            <a className={style.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                    <path fill-rule="evenodd" d="M14 9H4v2h10V9zm2-7h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H2V7h14v11zm-5-5H4v2h7v-2z"/>
                </svg>
            </a>
            <a className={style.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M15 10V1c0-.552-.448-1-1-1H1C.448 0 0 .448 0 1v14l4-4h10c.552 0 1-.448 1-1zm4-6h-2v9H4v2c0 .552.448 1 1 1h11l4 4V5c0-.552-.448-1-1-1z"/>
                </svg>
            </a>
            <a className={style.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g>
                        <path d="M17.778 0H2.222C.994 0 0 .994 0 2.222v4.445h2.222V2.222h15.556v15.556H2.222v-4.445H0v4.445C0 19.006.994 20 2.222 20h15.556C19.006 20 20 19.006 20 17.778V2.222C20 .994 19.006 0 17.778 0z" transform="matrix(-1 0 0 1 20 0)"/>
                        <path d="M7.872 13.443L9.444 15 15 9.5 9.444 4 7.872 5.557 10.744 8.4 0 8.4 0 10.6 10.744 10.6z" transform="matrix(-1 0 0 1 20 0)"/>
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default Component
