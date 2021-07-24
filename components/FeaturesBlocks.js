import React from "react";

import { useTranslation } from "next-i18next";

import {
  faSeedling,
  faMobile,
  faMobileAlt,
  faLemon,
  faCarrot,
  faAppleAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeaturesBlocks() {
  const { t } = useTranslation("landing");

  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-green-600 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <h2 className="h2  text-green-600">{t("why_use_mosmera")}</h2>
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="zoom-y-out">
            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FontAwesomeIcon
                icon={faSeedling}
                className="text-7xl text-green-500 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t("farm_setup")}
              </h4>
              <p className="text-gray-600 text-center">
                {t("farm_setup_description")}
              </p>
            </div>
            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="text-7xl text-green-500 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t("consultation_and_followup")}
              </h4>
              <p className="text-gray-600 text-center">
                {t("consultation_and_followup_description")}
              </p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <FontAwesomeIcon
                icon={faAppleAlt}
                className="text-7xl text-green-500 mb-2"
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t("harvest")}
              </h4>
              <p className="text-gray-600 text-center">
                {t("harvest_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
