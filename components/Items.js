import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const productList = [
  {
    imageSrc: "/images/crops/strawberry.jpg",
    name: "strawberry",
  },
  {
    imageSrc: "/images/crops/peppers.jpg",
    name: "peppers",
  },
  {
    imageSrc: "/images/crops/roselle.jpg",
    name: "roselle",
  },
  {
    imageSrc: "/images/crops/arugula.jpg",
    name: "arugula",
  },
  {
    imageSrc: "/images/crops/basil.jpg",
    name: "basil",
  },
  {
    imageSrc: "/images/crops/black-eggplant.jpg",
    name: "black-eggplant",
  },
  {
    imageSrc: "/images/crops/blue-tea.jpg",
    name: "blue-tea",
  },
  {
    imageSrc: "/images/crops/cucumber.jpg",
    name: "cucumber",
  },
  {
    imageSrc: "/images/crops/grape.jpg",
    name: "grape",
  },
  {
    imageSrc: "/images/crops/green-tea.jpg",
    name: "green-tea",
  },
  {
    imageSrc: "/images/crops/ground-cherry.jpg",
    name: "ground-cherry",
  },
  {
    imageSrc: "/images/crops/lemon.jpg",
    name: "lemon",
  },
  {
    imageSrc: "/images/crops/lettuce.jpg",
    name: "lettuce",
  },
  {
    imageSrc: "/images/crops/moringa.jpg",
    name: "moringa",
  },
  {
    imageSrc: "/images/crops/parsley.jpg",
    name: "parsley",
  },
  {
    imageSrc: "/images/crops/white-eggplant.jpg",
    name: "white-eggplant",
  },
];
function Items() {
  const [listSize, setListSize] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [products, setProducts] = useState([]);
  const [width, setWidth] = useState(1024);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;
  useEffect(() => {
    if (isMobile) {
      setListSize(2);
      setEndIndex(2);
    } else {
      setListSize(4);
      setStartIndex(0);
      setEndIndex(4);
    }
  }, [width, isMobile]);

  const { t } = useTranslation(["crops", "landing"]);
  const { locale } = useRouter();

  useEffect(() => {
    const filteredProducts = productList.slice(startIndex, endIndex);
    setProducts(filteredProducts);
  }, []);
  const onBackClicked = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - listSize);
      setEndIndex(endIndex - listSize);
    }
  };
  const onForwardClicked = () => {
    if (endIndex < productList.length) {
      setStartIndex(startIndex + listSize);
      setEndIndex(endIndex + listSize);
    }
  };
  useEffect(() => {
    const filteredProducts = productList.slice(startIndex, endIndex);
    setProducts(filteredProducts);
  }, [startIndex, endIndex]);
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">{t("landing:seeds_you_can_farm")}</h2>
          </div>
          {/* Items */}
          <div className="flex space-x-2 me-2">
            {/* Item */}
            <div
              className="flex flex-col items-center justify-center p-6"
              onClick={onBackClicked}
            >
              <FontAwesomeIcon
                onClick={onBackClicked}
                icon={locale == "ar" ? faChevronRight : faChevronLeft}
                className="text-2xl md:text-6xl text-green-500 hover:opacity-50"
              />
            </div>

            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between"
                >
                  <div className="w-3/4">
                    <Image
                      src={product.imageSrc}
                      width="250"
                      height="250"
                      alt={product.name}
                    />
                  </div>
                  <p className="text-xs">{t(product.name)}</p>
                </div>
              );
            })}

            <div className="flex flex-col items-center justify-center p-6">
              <FontAwesomeIcon
                onClick={onForwardClicked}
                icon={locale == "ar" ? faChevronLeft : faChevronRight}
                className="text-2xl md:text-6xl hover:opacity-50 text-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;
