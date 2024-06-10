import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PropTypes } from "prop-types";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import reviewsData from "../data/reviews";
import Review from "../components/Review";
import ReviewsSectionImage from '../assets/images/reviews-draw.png';



const Reviews = ({ setActivePage }) => {

    const { i18n, t } = useTranslation();

    useEffect(() => {

        setActivePage('reviews');

    }, []);

    const settings = {

        lazyload: true,
        nav: false,
        mouseDrag: true,
        autoplay: true,
        controlsPosition: 'bottom',
        controlsText: [`<span class="slide-btn prev-btn"> < </span>`, `<span class="slide-btn next-btn"> > </span>`]

    }

    return (

        <section id="reviews">

            <div className="section-container">

                <div className="reviews-slider">

                    <TinySlider settings={settings} >
                        {reviewsData.map((item, index) => (<Review key={index} reviewer={item.reviewer} text={i18n.language === 'fr' ? item.textfr : i18n.language === 'ar' ? item.textar : item.texten} avatar={item.logo} />))}
                    </TinySlider>

                </div>

                <div className="section-title reviews-title">
                    <h2 className="is-uppercase title">{t('reviews.heading')}</h2>
                </div>

                <figure className="reviews-draw-image image">

                    <img
                        src={ReviewsSectionImage}
                        alt="reviews about Mohamed Ait Eljaouadi Services"
                    />

                </figure>

            </div>

        </section >

    );

}

export default Reviews;