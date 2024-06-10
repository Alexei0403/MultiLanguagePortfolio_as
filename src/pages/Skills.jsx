import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import skillsData from "../data/skills";
import Skill from "../components/Skill";
import Ceraficate from "../components/Ceraficate";
import cert from "../assets/images/certifactes/cert.jpeg";
import { FaAward } from "react-icons/fa";

const Skills = ({ setActivePage }) => {

    const { t } = useTranslation();

    useEffect(() => {

        setActivePage('skills');

    }, []);


    return (

        <section id="skills">

            <div className="section-container">

                <div className="skills-container">

                    <p className="skills-p">{t('skills.section-descrip')}</p>

                    <div className="columns is-multiline">

                        {skillsData.map((item, index) => (<Skill key={index} SkillIcon={item.icon} SkillTitle={item.title} />))}

                    </div>

                    <div className="cert">

                        <h3 className="sub-section-title">
                            <span className="icon">
                                <FaAward />
                            </span>
                            <span>{t('skills.sub-section-title')}</span>
                        </h3>

                        <div className="columns is-multiline">

                            <Ceraficate certImage={cert} certTitle={'Udacity 1 Million MAC front end developer'} />

                        </div>

                    </div>

                </div>

                <div className="section-title skills-title">

                    <h2 className="is-uppercase title">{t('skills.heading')}</h2>

                </div>



            </div>

        </section>

    )

}

export default Skills;