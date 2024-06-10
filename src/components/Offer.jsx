import { useTranslation } from "react-i18next";

const OfferItem = ({ offerTitle, OfferPoster, OfferLink }) => {

    const { t } = useTranslation();

    return (

        <div className="column is-6">

            <div className="card offer-item">

                <div className="card-header">

                    <figure className="image">
                        <img src={OfferPoster} alt="portfolio" />
                    </figure>

                </div>

                <div className="card-footer">

                    <div className="offer-title">

                        <div className="tags">
                            <span className="tag is-success">{t('offers.offer-type-two')}</span>
                        </div>

                        <h3>
                            <a href={OfferLink} target="_blank">
                                <span>{offerTitle}</span>
                            </a>
                        </h3>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default OfferItem;