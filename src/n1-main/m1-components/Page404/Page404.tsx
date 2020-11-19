import style from "./Page404.module.css";

import React from "react";

export const Page404 = () => {
    return (
        <div className={style.container}>
            <span className={style.errorNumber}>404</span>
            <span className={style.text}>Page not found</span>
        </div>
    );
}
