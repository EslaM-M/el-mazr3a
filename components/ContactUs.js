import React, { useState } from "react";

import { useTranslation } from "next-i18next";

import axiosInstance from "../libs/axiosInstance";
import Image from "next/image";
import { data } from "autoprefixer";
import RequestSuccess from "./RequestSuccess";
export default function ContactUs() {
  const { t } = useTranslation("landing");

  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);

  const [isRequestSent, setIsRequestSent] = useState(false);

  const [userResponse, setUserResponse] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const requestFarm = async (event) => {
    setErrorMessage(null);
    event.preventDefault();
    setIsRequestSent(true);
    try {
      const { data } = await axiosInstance({
        url: `/users`,
        method: "POST",
        data: {
          address: address,
          phone: phone,
        },
      });
      setUserResponse(data);
    } catch (e) {
      setErrorMessage("ERROR_WHILE_SENDING_REQUEST");
    } finally {
      setIsRequestSent(false);
    }
  };
  return (
    <section id="contactus">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          {!userResponse ? (
            <div
              className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden flex"
              data-aos="zoom-y-out"
            >
              <div className="relative flex flex-col lg:flex-row justify-between items-center flex-1">
                {/* CTA content */}
                <div className="lg:max-w-xl">
                  <h3 className="h3 text-white mb-2">
                    {t("setup_farm_request")}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    {t("setup_farm_contactus_description")}
                  </p>

                  {/* CTA form */}
                  <form className="w-full lg:w-auto">
                    <div className="max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <div className="flex flex-col sm:flex-row justify-center">
                        <input
                          type="phone"
                          onChange={onChangePhone}
                          className="w-full appearance-none bg-white-100 border border-green-400 focus:border-green-500 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-green-600 placeholder-gray-400"
                          placeholder={t("phonenumber")}
                          aria-label="Phone number"
                        />
                        <input
                          className="w-full appearance-none bg-white-100 border border-green-400 focus:border-green-500 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-green-600 placeholder-gray-400 lg:mx-2"
                          type="text"
                          onChange={onChangeAddress}
                          placeholder={t("address")}
                          aria-label="Address"
                        />
                        <button
                          onClick={requestFarm}
                          disabled={!address || !phone || isRequestSent}
                          className="btn text-white bg-green-600 hover:bg-green-700 shadow truncate disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {t("setup_farm_request")}
                        </button>
                      </div>
                      {errorMessage && (
                        <div className="flex mx-auto text-red-500 text-sm my-4">
                          {t("ERROR_WHILE_SENDING_REQUEST")}
                        </div>
                      )}
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    <p className="text-sm text-gray-400 mt-3">
                      {t("setup_pricing_starts_with")}
                    </p>
                  </form>
                </div>
              </div>

              {/* Background illustration */}
              <div
                className="pointer-events-none hidden lg:block"
                aria-hidden="true"
              >
                <Image
                  alt="fruits"
                  src="/images/fruits.png"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          ) : (
            <RequestSuccess />
          )}
        </div>
      </div>
    </section>
  );
}
