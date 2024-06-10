/** @format */

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import offersData from "../data/offers";
import OfferItem from "../components/Offer";
import OffersSectionImage from "../assets/images/portfolio-draw.png";

const Offer = ({ setActivePage }) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    setActivePage("offers");
  }, []);

  return (
    <section id="offers">
      <div className="section-container">
        <div className="offers-items">
          <div className="columns is-multiline">
            {offersData.map((offer, index) => (
              <OfferItem
                key={index}
                OfferPoster={offer.poster}
                offerTitle={
                  i18n.language === "fr"
                    ? offer.titleFr
                    : i18n.language === "ar"
                    ? offer.titleAr
                    : offer.titleEn
                }
                OfferLink={offer.link}
              />
            ))}
          </div>
        </div>

        <div className="section-title offers-title">
          <h2 className="is-uppercase title" data-localize="offers.heading">
            {t("offers.heading")}
          </h2>
        </div>

        <figure className="portfolio-draw-image image">
          <img
            src={OffersSectionImage}
            alt="reviews about Mohamed Ait Eljaouadi Services"
          />
        </figure>
      </div>
    </section>
  );
};

export default Offer;
