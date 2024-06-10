import { useTranslation } from "react-i18next";
import { FaCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";


const NavbarDots = ({ activePage }) => {

    const { i18n, t } = useTranslation();


    const pages = ['home', 'skills', 'portfolio', 'offers', 'reviews', 'contact'];

    return (

        // NAVBAR DOTS
        <div className="navbar-dots is-hidden-mobile">

            <ul>

                {
                    pages.map(
                        (page, index) =>

                            <li key={index}>

                                <Link to={page === 'home' ? '/' : page} key={index}>

                                    {page === activePage ? <span className="active-dot">{t(`navbar.${page}`)}</span> : <FaCircle />}

                                </Link>

                            </li>
                    )
                }

            </ul>

        </div >
        // NAVBAR DOTS

    )

}

export default NavbarDots;