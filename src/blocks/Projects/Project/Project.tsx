import React from 'react';
import s from './Project.module.scss'

type JobPropsType = {
    title: string
    desc: string
    style: any
}

const Project = (props: JobPropsType) => {
    return (
        <div className={s.job}>
            <div className={s.imgBox} style={props.style}>
                <div className={s.look}>Смотреть</div>
            </div>
            <div className={s.text}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.desc}>{props.desc}</div>
            </div>
        </div>
    );
};

export default Project;