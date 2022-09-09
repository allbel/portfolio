import React from 'react';
import s from './Skills.module.css'
import smain from '../../common/styles/container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${smain.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam dignissimos facilis fugit impedit molestiae nesciunt rem repudiandae tenetur. Dolore ea harum ipsam molestias nulla obcaecati quae, reiciendis suscipit.'}/>
                    <Skill title={'JavaScript'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid amet, architecto blanditiis dolorem enim inventore ipsam nesciunt, Voluptates!'}/>
                    <Skill title={'Redux'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;