/** @format */

import { Suspense, StrictMode, useState } from "react";
import "./scss/core.scss";
import "./scss/rtl-support.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n/i18n";
import { useTranslation } from "react-i18next";
import LoadingPage from "./components/Loading";
import Navbar from "./components/Navbar";
import NavbarDots from "./components/NavbarDots";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Offers from "./pages/Offers";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { i18n } = useTranslation();

  document.dir = i18n.dir();

  const [activePage, setActivePage] = useState("home");

  const emptyLinks = document.querySelectorAll('a[href="#"]');

  emptyLinks.forEach((a) => {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  return (
    <Suspense>
      <BrowserRouter>
        <LoadingPage />

        <Navbar />

        <main>
          <div className="columns is-gapless">
            <div className="column ">
              <NavbarDots activePage={activePage} />

              <div className="sections-container">
                <Routes>
                  <Route
                    path="/"
                    element={<Home setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/skills"
                    element={<Skills setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/about"
                    element={<About setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/portfolio"
                    element={<Portfolio setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/offers"
                    element={<Offers setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/reviews"
                    element={<Reviews setActivePage={setActivePage} />}
                  />
                  <Route
                    path="/contact"
                    element={<Contact setActivePage={setActivePage} />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>

            {/* <div className="column is-4">
              <Sidebar />
            </div> */}
          </div>
        </main>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
