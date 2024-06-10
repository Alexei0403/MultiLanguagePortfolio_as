/** @format */

import { LANGUAGES } from "../i18n";
import { IoLanguage, IoChevronDownOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const pages = [
    "home",
    "about",
    "studies",
    "publifications",
    "scientificactivities",
    "contact",
  ];

  const { i18n, t } = useTranslation();

  const triggerDropdownMenu = (event) => {
    const menuTrigger = event.currentTarget;

    menuTrigger.parentElement.classList.toggle("is-active");

    const menuItems = menuTrigger.nextElementSibling.firstElementChild.children;

    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];

      item.addEventListener("click", () => {
        menuTrigger.parentElement.classList.remove("is-active");
      });
    }
  };

  const handleNavmenu = (event) => {
    const navbarBurger = event.currentTarget;
    navbarBurger.classList.toggle("is-active");
    navbarBurger.parentElement.nextElementSibling.classList.toggle("is-active");
  };

  return (
    // NAVBAR COMPONENT
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a href="https://eljaouadi.online" className="navbar-item">
          <img
            src={logo}
            alt="Eljaouadi Freelancer Full stack developer Website e-commerce woocommerce design and development"
          />
        </a>

        <div className="dropdown is-flex-touch is-hidden-desktop is-right languages-dorpdown ml-auto">
          <div className="dropdown-trigger" onClick={triggerDropdownMenu}>
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span className="icon is-small">
                <IoLanguage />
              </span>

              <span className="icon is-small">
                <IoChevronDownOutline />
              </span>
            </button>
          </div>

          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {LANGUAGES.map((language, index) => (
                <div
                  className={`dropdown-item ${language.code}-button `}
                  data-lang={language.code}
                  key={index}
                  onClick={() => i18n.changeLanguage(language.code)}
                >
                  {language.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          className="navbar-burger burger ml-0"
          role="button"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-links"
          onClick={handleNavmenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          {pages.map((page, index) => (
            <NavLink
              to={page === "home" ? "/" : page}
              key={index}
              className="navbar-item is-uppercase"
            >
              {t(`navbar.${page}`)}
            </NavLink>
          ))}

          <div className="navbar-item is-hidden-touch is-flex-desktop">
            <div className="dropdown is-right languages-dorpdown">
              <div className="dropdown-trigger" onClick={triggerDropdownMenu}>
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span className="icon is-small">
                    <IoLanguage />
                  </span>

                  <span>{t("navbar.language")}</span>

                  <span className="icon is-small">
                    <IoChevronDownOutline />
                  </span>
                </button>
              </div>

              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {LANGUAGES.map((language, index) => (
                    <div
                      className={`dropdown-item ${language.code}-button `}
                      data-lang={language.code}
                      key={index}
                      onClick={() => i18n.changeLanguage(language.code)}
                    >
                      {language.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
