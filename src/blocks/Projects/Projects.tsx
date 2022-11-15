import React from 'react';
import s from './Projects.module.scss'
import smain from "../../common/styles/container.module.css";
import Project from "./Project/Project";
import Title from "../../common/components/Title/Title";
import socialImage from "../../assets/image/social_network.jpeg";
import todoImage from "../../assets/image/todolist.jpeg";

const Projects = () => {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };

    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${smain.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Learning by cards'}
                             desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse eveniet hic, id labore neque quisquam tempore totam! Accusantium aliquid aperiam aspernatur beatae minima minus molestias nostrum obcaecati omnis possimus.'}/>
                    <Project style={todolist} title={'Todo list'}
                             desc={'Animi esse eveniet hic, id labore neque quisquam tempore totam! Accusantium aliquid aperiam aspernatur beatae minima minus molestias nostrum obcaecati omnis possimus.'}/>
                    <Project style={social} title={'Social network'}
                             desc={'Animi esse eveniet hic, id labore neque quisquam tempore totam! Accusantium aliquid aperiam aspernatur beatae minima minus molestias nostrum obcaecati omnis possimus.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;