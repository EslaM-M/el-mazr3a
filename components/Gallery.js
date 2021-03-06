import React, { useState, useRef, useEffect } from "react";
import ReactImageGallery from "react-image-gallery";
import Transition from "../utils/Transition.js";
import firstPicture from "../public/images/galary/1.jpeg";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
function Gallery() {
  const [tab, setTab] = useState(1);

  const router = useRouter();
  const tabs = useRef(null);
  const { t } = useTranslation("landing");

  const getGalleryImages = () => {
    if (typeof window !== "undefined") {
      return [
        {
          original: `${window?.origin}/images/galary/1.jpeg`,
          thumbnail: `${window?.origin}/images/galary/1.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/2.jpeg`,
          thumbnail: `${window?.origin}/images/galary/2.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/3.jpeg`,
          thumbnail: `${window?.origin}/images/galary/3.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/4.jpeg`,
          thumbnail: `${window?.origin}/images/galary/4.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/5.jpeg`,
          thumbnail: `${window?.origin}/images/galary/5.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/6.jpeg`,
          thumbnail: `${window?.origin}/images/galary/6.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/7.jpeg`,
          thumbnail: `${window?.origin}/images/galary/7.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/8.jpeg`,
          thumbnail: `${window?.origin}/images/galary/8.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/9.jpeg`,
          thumbnail: `${window?.origin}/images/galary/9.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/10.jpeg`,
          thumbnail: `${window?.origin}/images/galary/10.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/11.jpeg`,
          thumbnail: `${window?.origin}/images/galary/11.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/12.jpeg`,
          thumbnail: `${window?.origin}/images/galary/12.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/13.jpeg`,
          thumbnail: `${window?.origin}/images/galary/13.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/14.jpeg`,
          thumbnail: `${window?.origin}/images/galary/14.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/15.jpeg`,
          thumbnail: `${window?.origin}/images/galary/15.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/16.jpeg`,
          thumbnail: `${window?.origin}/images/galary/16.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/17.jpeg`,
          thumbnail: `${window?.origin}/images/galary/17.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/18.jpeg`,
          thumbnail: `${window?.origin}/images/galary/18.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/19.jpeg`,
          thumbnail: `${window?.origin}/images/galary/19.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/20.jpeg`,
          thumbnail: `${window?.origin}/images/galary/20.jpeg`,
        },
        {
          original: `${window?.origin}/images/galary/21.jpeg`,
          thumbnail: `${window?.origin}/images/galary/21.jpeg`,
        },
      ];
    }
    return [];
  };
  return (
    <section className="relative" data-aos="zoom-y-out">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">{t("latest_work")}</h1>
            <p className="text-xl text-gray-600">{t("mosmera_slogan_2")}</p>
          </div>
        </div>
        {/* 1280/ 853 */}
        <div>
          {typeof window !== "undefined" ? (
            <ReactImageGallery items={getGalleryImages()} />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
