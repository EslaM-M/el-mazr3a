import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from 'next/link';

import { useTranslation } from "next-i18next";

import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LanguageSwitcher({}) {
  const { locale } = useRouter();

  return (
    <Link
      href={locale === "en" ? "/ar" : "/en"}
      className="btn-sm text-green-500 bg-gray-100 hover:bg-gray-200 me-2"
    >
      {locale === "en" ? "ع" : "EN"}
    </Link>
  );
}

function Header() {
  const [top, setTop] = useState(true);
  const { t } = useTranslation("landing");
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg
                className="w-8 h-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <LanguageSwitcher />
                <button
                  className={`btn-sm ${
                    top
                      ? "text-green-500 bg-gray-100 hover:bg-gray-200"
                      : "text-white bg-green-400 hover:bg-green-500"
                  }`}
                  onClick={() =>
                    document
                      .getElementById("contactus")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>{t("setup_farm_request")}</span>
                  <FontAwesomeIcon icon={faSeedling} className="ms-2" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
