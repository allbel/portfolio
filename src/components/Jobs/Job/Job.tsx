import React from 'react';
import s from './Job.module.css'

type JobPropsType = {
    title: string
    desc: string
}

const Job = (props: JobPropsType) => {
    return (
        <div className={s.job}>
            <div className={s.imgBox}>
                <div className={s.look}>Смотреть</div>
            </div>
            <div className={s.text}>
                <h3>{props.title}</h3>
                <span className={s.desc}>{props.desc}</span>
            </div>
        </div>
    );
};

export default Job;