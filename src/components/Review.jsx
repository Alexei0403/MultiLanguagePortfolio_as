import { useTranslation } from "react-i18next";
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Review = ({ reviewer, text, avatar }) => {

    const { t } = useTranslation();

    return (

        <div className="review-item">

            <div className="review-header is-flex">

                <div className="reviewer is-flex">

                    <figure className="image avater is-96x96">
                        <img src={avatar} alt="reviewer" />
                    </figure>

                    <div className="reviewer-info">
                        <h4 className="client-name is-capitalized">{reviewer}</h4>
                        <h6 className="position">{t("reviews.position")}</h6>
                    </div>

                </div>

                <div className="rating">

                    <h5>{t("reviews.rating")}</h5>

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                </div>

            </div>

            <div className="review-content">

                <FaQuoteLeft />
                <p>{text}</p>

            </div>

        </div>

    );

}

export default Review;