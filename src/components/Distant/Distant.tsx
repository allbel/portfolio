import React from 'react';
import s from './Distant.module.css'
import smain from "../../common/styles/container.module.css";

const Distant = () => {
    return (
        <div className={s.distantBlock}>
            <div className={`${smain.container} ${s.distantContainer}`}>
                <span className={s.desc}>Рассматриваю варианты удаленной работы</span>
                <button className={s.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Distant;