import React from 'react';
import s from './Title.module.scss';

type PropsType = {
    text: string
}

const Title = (props: PropsType) => {
    return <h2 className={s.title}>{props.text}</h2>
};

export default Title;