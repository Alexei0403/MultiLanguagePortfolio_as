import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import worksData from "../data/works";
import Work from "../components/Work";
import PortfolioSectionImage from '../assets/images/portfolio-draw.png';

const Portfolio = ({ setActivePage }) => {

    const { t } = useTranslation();

    useEffect(() => {

        setActivePage('portfolio');

    }, []);

    return (

        <section id="portfolio" >

            <div className="section-container">

                <div className="portfolio-items">

                    <div className="columns is-multiline">

                        {
                            worksData.map((work, index) => (<Work key={index} workImage={work.poster} workLink={work.previewLink} workTitle={work.title} />))
                        }

                    </div>

                </div>

                <div className="section-title portfolio-title">
                    <h2 className="is-uppercase title" data-localize="portfolio.heading">
                        {t('portfolio.heading')}
                    </h2>
                </div>

                <figure className="portfolio-draw-image image">
                    <img src={PortfolioSectionImage} alt="reviews about Mohamed Ait Eljaouadi Services" />
                </figure>

            </div>
        </section>

    );

}

export default Portfolio;