import React, {useState} from 'react';
import s from './BurgerNav.module.scss';
import { Link } from 'react-scroll'

const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
      setMenuIsOpen(!menuIsOpen);
    };

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link
                  to="main"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Main</Link>
                <Link
                  to="skills"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Skills</Link>
                <Link
                  to="projects"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Projects</Link>
                <Link
                  to="contacts"
                  activeClass={s.active}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={s.burgerBtn}></div>
        </div>
    );
};

export default BurgerNav;