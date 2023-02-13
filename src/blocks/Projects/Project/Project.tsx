import React from 'react';
import s from './Project.module.scss'
import plus from '../../../assets/image/plus.png';

type JobPropsType = {
    title: string
    desc: string
    style: any
    href: string
}

const Project = (props: JobPropsType) => {
    return (
        <div className={s.job}>
            <a href={props.href} className={s.imgBox} style={props.style} target={'_blank'}>
                <span className={s.look}>
                    <img src={plus} alt={'Plus'} />
                </span>
            </a>
            <div className={s.text}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.desc}>{props.desc}</div>
            </div>
        </div>
    );
};

export default Project;