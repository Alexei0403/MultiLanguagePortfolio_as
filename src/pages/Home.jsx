/** @format */

import { useTranslation } from "react-i18next";
import { FaEnvelope, FaSuitcase } from "react-icons/fa";

import { useEffect } from "react";
import { Link } from "react-router-dom";

// HOME PAGE COMPONENT
const Home = ({ setActivePage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    setActivePage("home");
  }, []);

  return (
    <section id="home">
      <div className="section-container">
        <div className="home-content">
          <h1 className="is-uppercase">{t("home.heading")}</h1>

          <h3>{t("home.subtitle")}</h3>

          <p>{t("home.short-descrip")}</p>

          <div className="buttons">
            <a href="#" target="_blank" className="button is-rounded pph-btn">
              <span className="icon">
                <FaSuitcase />
              </span>

              {/* <span>{t("home.hire-btn")}</span> */}
            </a>

            <Link className="button is-text contact-btn" to="contact">
              <span className="icon">
                <FaEnvelope />
              </span>

              <span className="is-uppercase">{t("home.contact-btn")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
