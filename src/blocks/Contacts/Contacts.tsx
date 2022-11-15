import React from 'react';
import s from "./Contacts.module.css";
import smain from "../../common/styles/container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${smain.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <form className={s.form} action="./">
                    <input className={s.textField} type="text"/>
                    <input className={s.textField} type="text"/>
                    <textarea name="" id=""></textarea>
                    <button type={'submit'} className={s.button}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;