import { useTranslation } from "react-i18next";
import profileImage from '../assets/images/john-doe.png';
import signature from '../assets/images/signature.png';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import SocialMedia from "./SocialMedia";

const Sidebar = () => {

    const { i18n, t } = useTranslation();

    return (

        <aside>

            <div className="about-me">

                <figure className="image avater">

                    <img src={profileImage} alt="Mohamed A. Eljaouadi Front-end Developer" />
                    <span className="avilable"></span>

                </figure>

                <h2 className="is-uppercase has-text-centered">{t('sidebar.name')}</h2>

                <h4 className="is-uppercase has-text-centered">{t('sidebar.position')}</h4>

                <p className="short-bio has-text-centered">{t('sidebar.bio')}</p>

                <figure className="image signature">

                    <img src={signature} alt="Mohamed Ait Eljaouadi Signature" />

                </figure>

                <div className="button-container">
                    <a href="#" target="_blank" className="button is-rounded is-capitalized">{t('sidebar.download-resume-btn')}</a>
                </div>

            </div>

            <div className="social-media is-flex">

                <h5 className="is-uppercase" >{t('sidebar.contact-heading')}</h5>

                <ul className="social-media-links is-flex">

                    <SocialMedia SocialIcon={<FaLinkedinIn />} SocialLink={'#'} />
                    <SocialMedia SocialIcon={<FaGithub />} SocialLink={'#'} />
                    <SocialMedia SocialIcon={<FaFacebookF />} SocialLink={'#'} />
                    <SocialMedia SocialIcon={<FaWhatsapp />} SocialLink={'#'} />
                    <SocialMedia SocialIcon={<FaEnvelope />} SocialLink={'mailto:#'} />

                </ul>

            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1268.643"
                height="1039.253"
                viewBox="0 0 1268.643 1039.253"
                id='shape'
            >
                <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M286-412c746-180,388,564.671,388,753S523.12,682,337,682,218,358.329,218,170-460-232,286-412Z"
                    transform="matrix(-0.208, -0.978, 0.978, -0.208, 588.209, 885.055)"
                    fill="#e4e4e8"
                    opacity="0.35"
                />
            </svg>

        </aside>

    );

}

export default Sidebar;