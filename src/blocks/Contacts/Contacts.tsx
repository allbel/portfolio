import React from 'react';
import s from "./Contacts.module.scss";
import smain from "../../common/styles/container.module.scss";
import Title from "../../common/components/Title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
            <div className={`${smain.container} ${s.contactsContainer}`}>
                <Fade bottom>
                    <Title text={'Contacts'}/>
                </Fade>
                <Fade bottom>
                    <div className={s.boxForm}>
                        <form className={s.form} action="./">
                            <div className={s.formGroup}>
                                <label htmlFor="contactName">Your Name</label>
                                <input className={s.filedText} id="contactName" type="text"/>
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="contactEmail">Email</label>
                                <input className={s.filedText} id="contactEmail" type="text"/>
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="contactMessage">Your Message</label>
                                <textarea className={s.filedMessage} id="contactMessage"></textarea>
                            </div>
                            <button type={'submit'} className={s.button}>Send message</button>
                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;