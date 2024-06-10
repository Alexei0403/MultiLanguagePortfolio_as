/** @format */

import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const get_localhost = import.meta.env.DEV
  ? "http://localhost:3000"
  : "https://adress.online";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${get_localhost}/i18n/lang-{{lng}}.json`,
    },
  });

export default i18n;
