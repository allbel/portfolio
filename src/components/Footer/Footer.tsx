import React from 'react';
import s from './Footer.module.css'
import smain from "../../common/styles/container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${smain.container} ${s.footerContainer}`}>
                <h2 className={s.name}>Александр Белозеров</h2>
                <div className={s.boxes}>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                    <div className={s.box}></div>
                </div>
                <span className={s.footerCopyright}>© 2022 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;