import React from 'react';
import s from './Main.module.css'
import sm from '../../common/styles/container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sm.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Aleksandr Belozerov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;