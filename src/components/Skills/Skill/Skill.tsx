import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
    desc: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.desc}>{props.desc}</span>
        </div>
    );
};

export default Skill;