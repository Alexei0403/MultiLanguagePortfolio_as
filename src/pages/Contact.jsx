import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import ContactSectionImage from '../assets/images/contact-draw.png';
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";


const Contact = ({ setActivePage }) => {

    const { t } = useTranslation();

    useEffect(() => {

        setActivePage('contact');

    }, []);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isValidMsg, setIsValidMsg] = useState(false);

    const handleSubmitForm = (e) => {

        e.preventDefault();

        const contactForm = document.querySelector('form.contact-form');

        if (isValidMsg) {

            emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', contactForm, 'PUBLIC_API')
                .then((result) => {

                    showSuccessMessage(t('contact.successMsg'));

                    document.querySelectorAll('input, textarea').forEach(formInput => formInput.setAttribute('focused', false));

                    contactForm.reset();

                }, (error) => {

                    showErrorMessage(t('contact.errors.submitError'));

                });

        }

    }

    const handleOnChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }


    // GENERALE FORM MESSAGES
    const formMsgElem = document.getElementById('form-message');

    const showErrorMessage = (message = '') => {

        formMsgElem.classList.add('errorMessage')
        formMsgElem.textContent = message;

    }

    const showSuccessMessage = (message = '') => {

        formMsgElem.classList.contains('errorMessage') ? formMsgElem.classList.remove('errorMessage') : formMsgElem.classList.add('successMessage')

        formMsgElem.textContent = message;

    }


    return (
        <section id="contact">

            <div className="section-container">

                <div className="contact-form-container">

                    <p className="form-msg">
                        {t('contact.section-descrip')}
                    </p>


                    <div id="form-message"></div>


                    <form className="contact-form" onSubmit={handleSubmitForm} >

                        <input type="hidden" className="input is-hidden" name="lang" value="en" id="lang" />

                        <div className="field">

                            <div className="control">

                                <input type="hidden" className="input is-hidden" name="empty" />

                            </div>

                        </div>

                        <div className="field">

                            <div className="field-body columns">

                                <FormInput

                                    name={'name'}
                                    type={'text'}
                                    label={t('contact.form.name')}
                                    handleOnChange={handleOnChange}
                                    errorMsg={t('contact.errors.general')}
                                    inputPattern={'^[a-zA-Z ]+$'}
                                    isRequired={true}
                                    classes={'column is-6 field mr-0'}

                                />

                                <FormInput

                                    name={'email'}
                                    type={'email'}
                                    label={t('contact.form.email')}
                                    handleOnChange={handleOnChange}
                                    errorMsg={t('contact.errors.email')}
                                    inputPattern={"^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"}
                                    isRequired={true}
                                    classes={'column is-6 field'}

                                />

                            </div>

                        </div>

                        <div className="field ">

                            <div className="field-body columns">

                                <FormInput

                                    name={'phone'}
                                    type={'text'}
                                    label={t('contact.form.phone')}
                                    handleOnChange={handleOnChange}
                                    errorMsg={t('contact.errors.phone')}
                                    inputPattern={'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'}
                                    isRequired={false}
                                    classes={'column is-6 field  mr-0'}

                                />

                                <FormInput

                                    name={'subject'}
                                    type={'text'}
                                    label={t('contact.form.subject')}
                                    handleOnChange={handleOnChange}
                                    errorMsg={t('contact.errors.general')}
                                    inputPattern={'^[a-zA-Z0-9\! ]+$'}
                                    isRequired={true}
                                    classes={'column is-6 field'}

                                />

                            </div>

                        </div>

                        <div className="field">

                            <FormTextarea

                                name={'message'}
                                label={t('contact.form.message')}
                                handleOnChange={handleOnChange}
                                isRequired={true}
                                message={formData.message}
                                setIsValidMsg={setIsValidMsg}

                            />

                        </div>


                        <div className="field">

                            <button id="submit-btn" className="button is-rounded" type="submit">{t('contact.send-btn')}</button>

                        </div>

                    </form>
                </div>
                <div className="section-title contact-title">

                    <h2 className="is-uppercase title">
                        {t('contact.heading')}
                    </h2>

                </div>
                <figure className="contact-draw-image image">
                    <img
                        src={ContactSectionImage}
                        alt="reviews about Mohamed Ait Eljaouadi Services"
                    />
                </figure>
            </div>
        </section>
    );

}

export default Contact;