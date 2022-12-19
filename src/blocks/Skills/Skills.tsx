import React from 'react';
import s from './Skills.module.scss'
import smain from '../../common/styles/container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../../common/components/Title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${smain.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam dignissimos facilis fugit.'}>
                        <img alt="React"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'Redux'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img alt="Redux"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'TypeScript'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADiklEQVRoge2bTWgUZxjHf8+sO6MHk1RQD7W2BfET7EHEg5ccKmmaZiq1OXqsBXurR4VaSutJPCkoCBF7sdqv3ZiUtseeCrYHCx4Sv0ohiEKbFnVnNjuPh92EODM7mTU74c10frCHfeZ5//P+mA92352FgoKClYzEFZXB9XWszcs9mW5SJvhTmHgYrkeElcH1PqumgJ5lmVl2zNiwRag+Wli0wl2tI7vSZQF668hr4eKq5DFyWGjcympGWaCUdoBebrc9UVho3LK5fqP708oOnyE0euLO035LTimE804hnHcK4bxTCOedQjjvFMJ5pxDOO4Vw3vnfCS+yppUeH/fIUsYrPHKofBOtj5R8vF2grwvaq1gB6H8CD8owFV6VXIyuCSt6fmkJcgOYF37K268K1nGf2gjQ19yHANraH/iAh/uXwAmbyqU0e+macDep4R4Q9CrQu3i3blJ4OW22cdfwE959RdArpJJtovAkbW/XjrCgP8dPRt4Mlf4V9NdwXwCTACWCo8BLkRj4XtDxAJm2YCOwS+EQsNlCll/YZuxAXN1jWJ+vyKRNNba3xWC0JJ84VD4LVxWO+bjvNwgivyG1w8RreFO40EBG4xoFFCpXOwk37homZk5CY2tm4QYwGS5YyFc13Le6EW6csKLXYsrrBJ3weeenOu7+peQbJ+zgnyPmKEPzjh+gv3i4P3i4u18k3zhh4cfHAQzQRrqJDoD+5uOeVkZKneQbJwywhupdm9n9IN8mtJUU/dinVlX6V6fNNlIYQJh46FB5T9Eh4I+E1sE6PZ+nzTVWeI7VjI3b7HkD5DBwJ65H0Y+Ug31p8owXBhBOBg6VL21mdypcjGlxPIJUd+8VITyHMOE5VD8AIs+dWAQb0mQYJ+wxfEjpb/uRt/lxksfhuiJ/p8k3Thg45bP2ps/wUWVgXXhjDdcF9kSHBVNpwk388gCwXeGsj33GY/h34DbQALaB7iX6QN1th+tJd/J5TBWewwb2tV4J6PG0gSae0p2gIJ86jF1JO8A4YYEvgK+B6YS2WWDcQvodKic7yc/8lBbkw4XvFRKXVW2qo8Bos/dgX53ZrQGlHqGxFkQFa7pMcFOopl7WWUjmwjaVCy86VvjuHyCy/rUUEoWV0g6foW7uL3NaD5e23b7IEdbLSQ9qmkl7WYi5aZWx7gMzWU1nGZkpo/fCxRz/BcC63+nvTgUFBebzDGMV94gdB+PtAAAAAElFTkSuQmCC"/>
                    </Skill>
                    <Skill title={'JavaScript'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid amet, architecto blanditiis.'}>
                        <img alt="JavaScript"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'Axios'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img alt="Axios"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'REST API'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img alt="REST API"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'Flux'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img alt="Flux"
                             src="data:image/png;base64,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"/>
                    </Skill>
                    <Skill title={'Git'}
                           desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque illo labore repellendus velit.'}>
                        <img alt="Git"
                             src="data:image/png;base64,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"/>
                    </Skill>
                </div>
            </div>
        </div>
    );
};

export default Skills;