import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const productList = [
  {
    imageSrc: "/images/tomato.jpg",
    name: "Tomato",
  },
  {
    imageSrc: "/images/lemon.jpg",
    name: "Lemon",
  },
  {
    imageSrc: "/images/tomato.jpg",
    name: "Tomato2",
  },
  {
    imageSrc: "/images/lemon.jpg",
    name: "Lemon2",
  },
  {
    imageSrc: "/images/tomato.jpg",
    name: "Tomato3",
  },
  {
    imageSrc: "/images/lemon.jpg",
    name: "Lemon3",
  },
  {
    imageSrc: "/images/tomato.jpg",
    name: "Tomato4",
  },
  {
    imageSrc: "/images/lemon.jpg",
    name: "Lemon4",
  },
];
function Items() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [products, setProducts] = useState([]);

  const { t } = useTranslation("landing");

  useEffect(() => {
    const filteredProducts = productList.slice(startIndex, endIndex);
    setProducts(filteredProducts);
  }, []);
  const onBackClicked = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
  };
  const onForwardClicked = () => {
    if (endIndex < productList.length) {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
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
          <h2 className="h2 mb-4">{t("seeds_you_can_farm")}</h2>
          </div>
          {/* Items */}
          <div className="flex space-x-2">
            {/* Item */}
            <div
              className="flex flex-col items-center justify-center py-2  md:col-auto"
              onClick={onBackClicked}
            >
              <Image
                src="/images/arrow_back.svg"
                className="hover:opacity-50"
                width="100"
                height="100"
                alt="back navigation"
              />
            </div>

            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center py-2  md:col-auto"
                >
                  <Image
                    src={product.imageSrc}
                    width="300"
                    height="300"
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                </div>
              );
            })}

            <div className="flex flex-col items-center justify-center py-2  md:col-auto">
              <Image
                src="/images/arrow_forward.svg"
                className="hover:opacity-50"
                width="100"
                height="100"
                alt="forward navigation"
                onClick={onForwardClicked}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;
