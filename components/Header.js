import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

function LanguageSwitcher({}) {
  const { locale } = useRouter();

  return (
    <Link href="/" locale={locale === "en" ? "ar" : "en"}>
      <span className="btn-sm text-green-500 bg-gray-100 hover:bg-gray-200 me-2">
        {locale === "en" ? "ع" : "EN"}
      </span>
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
            <Link href="/">
              <span className="block" aria-label="Cruip">
                <Image
                  alt="mosmera logo"
                  src={top ? "/images/mosmera-logo-light.png" : "/images/mosmera-logo.png"}
                  height="50"
                  width="75"
                />
              </span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <a href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
              </li> */}
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
