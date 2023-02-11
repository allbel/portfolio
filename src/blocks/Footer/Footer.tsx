import React from 'react';
import s from './Footer.module.scss'
import smain from "../../common/styles/container.module.scss";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${smain.container} ${s.footerContainer}`}>
                <div className={s.footerCopyright}>
                    <Fade bottom>© 2022 All rights reserved</Fade>
                </div>
            </div>
        </div>
    );
};

export default Footer;