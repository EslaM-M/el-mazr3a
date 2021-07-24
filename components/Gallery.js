import React, { useState, useRef, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import Transition from "../utils/Transition.js";
import firstPicture from "../public/images/galary/1.jpeg";
import { useTranslation } from "react-i18next";
function Gallery() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);
  const { t } = useTranslation('landing');

  const images = [
    {
      original: "http://localhost:3000/images/galary/1.jpeg",
      thumbnail: "http://localhost:3000/images/galary/1.jpeg",
    },
    {
      original: "http://localhost:3000/images/galary/2.jpeg",
      thumbnail: "http://localhost:3000/images/galary/2.jpeg",
    },
    {
      original: "http://localhost:3000/images/galary/3.jpeg",
      thumbnail: "http://localhost:3000/images/galary/3.jpeg",
    },
    {
      original: "http://localhost:3000/images/galary/4.jpeg",
      thumbnail: "http://localhost:3000/images/galary/4.jpeg",
    },
    {
      original: "http://localhost:3000/images/galary/7.jpeg",
      thumbnail: "http://localhost:3000/images/galary/7.jpeg",
    },
  ];

  return (
    <section className="relative" data-aos="zoom-y-out">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{t('latest_work')}</h1>
            <p className="text-xl text-gray-600">
              {t("mosmera_slogan_2")}
            </p>
          </div>
        </div>
        <div>
          <ReactImageGallery items={images} />
        </div>
      </div>
    </section>
  );
}

export default Gallery;