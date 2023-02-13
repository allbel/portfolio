import React from 'react';
import s from './Projects.module.scss'
import smain from "../../common/styles/container.module.scss";
import Project from "./Project/Project";
import Title from "../../common/components/Title/Title";
import socialImage from "../../assets/image/social_network.jpeg";
import cardsImage from "../../assets/image/cards.jpg";
import todoImage from "../../assets/image/todolist.jpeg";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };

    const cards = {
        color: 'blue',
        backgroundImage: `url(${cardsImage})`,
    };

    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${smain.container} ${s.projectsContainer}`}>
                <Fade bottom>
                    <Title text={'Projects'}/>
                </Fade>
                <Fade bottom>
                    <div className={s.projects}>
                        <Project style={cards} title={'Learning by cards'} href={'https://friday-project.vercel.app/'}
                                 desc={'The card method is well studied, and its effectiveness in teaching has been proven by research and the experience of many users.'}/>
                        <Project style={todolist} title={'Todo list'} href={'https://allbel.github.io/todolist/'}
                                 desc={'Keeping a to-do list of things to do over a period of time, such as a day or a week, is one of the most powerful ways to increase personal effectiveness.'}/>
                        <Project style={social} title={'Social network'} href={'https://allbel.github.io/Social-network/'}
                                 desc={'A platform that is used for communication, dating, creating social relationships between people who have similar interests.'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Projects;