import { useTranslation } from "react-i18next";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';


const Work = ({ workImage, workTitle, workLink }) => {

    const { i18n, t } = useTranslation();

    return (

        <div className="column is-6">
            <div className="card portfolio-item">
                <div className="card-header">
                    <figure className="image">
                        <img src={workImage} alt="portfolio" />
                    </figure>
                </div>
                <div className="card-footer">
                    <div className="is-flex">
                        <h3>{workTitle}</h3>
                        <div className="preview">
                            <a href={workLink} target="_blank">
                                <span>{t('portfolio.preview')}</span>
                                {
                                    i18n.language === 'ar' ? <FaChevronLeft /> : <FaChevronRight />
                                }

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Work;