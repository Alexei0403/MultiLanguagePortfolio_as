import { useTranslation } from "react-i18next";
import Error404 from '../assets/images/404.svg';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {

    const { t } = useTranslation();


    return (
        <section className="error-404">

            <div className="section-container">

                <div className="page-content">

                    <h2 className="is-uppercase has-text-weight-bold has-text-centered">{t('error.section-title')}</h2>

                    <figure className="image not-found">
                        <img src={Error404} alt="404" />
                    </figure>

                </div>

                <div className="page-footer">

                    <div className="error-title">

                        <h2 className="is-uppercase title">{t('error.heading')}</h2>

                    </div>

                    <div className="buttons">

                        <Link to="/"
                            className="button home-button is-rounded is-uppercase has-text-weight-bold">
                            <span className="icon">
                                <FaHome />
                            </span>
                            <span>{t('error.home-btn')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default NotFound;