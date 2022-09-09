import React from 'react';
import s from './Jobs.module.css'
import smain from "../../common/styles/container.module.css";
import Job from "./Job/Job";

const Jobs = () => {
    return (
        <div className={s.jobsBlock}>
            <div className={`${smain.container} ${s.jobsContainer}`}>
                <h2 className={s.title}>Jobs</h2>
                <div className={s.jobs}>
                    <Job title={'Project 1'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse eveniet hic, id labore neque quisquam tempore totam! Accusantium aliquid aperiam aspernatur beatae minima minus molestias nostrum obcaecati omnis possimus.'}/>
                    <Job title={'Project 2'} desc={'Animi esse eveniet hic, id labore neque quisquam tempore totam! Accusantium aliquid aperiam aspernatur beatae minima minus molestias nostrum obcaecati omnis possimus.'}/>
                </div>
            </div>
        </div>
    );
};

export default Jobs;