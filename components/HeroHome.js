import React from "react";

import { useTranslation } from "next-i18next";

import {} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroHome() {
  const { t } = useTranslation("landing");

  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-500 pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-row items-center">
        <div className="flex-1" data-aos="zoom-y-out">
          <div className="max-w-lg">
            <h2 className="text-4xl text-white">{t("mosmera_slogan")}</h2>
            <p className="text-white mt-5">{t("mosmera_brief")}</p>
            <div className="flex flex-row mt-5">
              <div className="flex mt-3 lg:w-48 h-14 bg-transparent text-white border border-white rounded-xl items-center justify-center px-1">
                <div className="me-3">
                  <FontAwesomeIcon icon={faApple} className="text-3xl" />
                </div>
                <div>
                  <div className="text-xs">{t("download_app_soon")}</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>

              <div className="flex ms-4 mt-3 lg:w-48 h-14 bg-gray text-white rounded-lg border border-white rounded-xl items-center justify-center px-1">
                <div className="me-3">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-3xl" />
                </div>
                <div>
                  <div className="text-xs">{t("download_app_soon")}</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/mobile-app-screen.png"
          width="200"
          className="-mb-40 z-10 hidden lg:block"
        />
      </div>
    </section>
  );
}

export default HeroHome;
