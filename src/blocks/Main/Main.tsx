import React from 'react';
import s from './Main.module.scss'
import sm from '../../common/styles/container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sm.container}>
                <div className={s.text}>
                    <span className={s.subtitle}>Welcome to my world</span>
                    <h1 className={s.title}>
                        Hi, I’m <span className={s.name}>Aleksandr Belozerov</span>
                        <br/>
                        a Frontend Developer.
                    </h1>
                    <div className={s.desc}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc odio, rutrum vel consequat vel, efficitur id felis. Vestibulum dolor tellus, pretium non nisi vel, pellentesque suscipit nunc. Phasellus sed interdum mi. Cras congue odio quis euismod finibus. Praesent tincidunt dolor ac purus maximus, vehicula maximus risus iaculis.</p>
                    </div>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;