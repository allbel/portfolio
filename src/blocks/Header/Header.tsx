import React from 'react';
import s from './Header.module.scss';
import sm from '../../common/styles/container.module.scss'
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={sm.container}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;