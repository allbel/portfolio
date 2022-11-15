import React from 'react';
import s from './Skill.module.scss'
import logo from '../../../assets/icons/js_60_60.svg'

type SkillPropsType = {
    title: string
    desc: string
    children: React.ReactNode
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.inner}>
                <div className={s.icon}>
                    {props.children}
                </div>
                <h3>{props.title}</h3>
                <div className={s.desc}>{props.desc}</div>
            </div>
        </div>
    );
};

export default Skill;