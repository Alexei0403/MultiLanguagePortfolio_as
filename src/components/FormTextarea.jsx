import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

const FormTextarea = ({ name, label, handleOnChange, isRequired, message, setIsValidMsg }) => {

    const { t } = useTranslation();

    const [checkerText, setCheckerText] = useState(false);

    const handleChecker = (e) => {

        setCheckerText(true);

    }

    let hasError = '';

    if (message != '') {

        if (message.length < 30) {

            hasError = t('contact.errors.shortMsg');

        } else {

            const regex = /^[a-zA-Z0-9\!\.\,\?\#\'\" ]+$/;

            if (!regex.test(message)) {

                hasError = t('contact.errors.specialChars');

            }

        }


    } else {

        hasError = t('contact.errors.emptyMsg');

    }

    hasError === '' ?
        useEffect(() => { setIsValidMsg(true) }, []) : useEffect(() => { setIsValidMsg(false) }, [])


    return (

        <div className="field">

            <div className="control">
                <textarea className={checkerText && hasError ? ' textarea is-medium errorLine' : `textarea is-medium`} name={name} id="message" onChange={handleOnChange} required={isRequired} onBlur={handleChecker} focused={checkerText.toString()}></textarea>
                <span className={checkerText && hasError ? 'errorMessage is-block' : 'errorMessage'}>{hasError}</span>
                <label htmlFor="message" className="label is-uppercase">{label}</label>
            </div>

        </div >

    );


}

export default FormTextarea;