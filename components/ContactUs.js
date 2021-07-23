import React from "react";

export default function ContactUs() {
  return (
    <section id="contactus">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img src="/images/fruits.png" height={300} width={300} />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Start Now</h3>
                <p className="text-gray-300 text-lg mb-6">
                  One of our engineers will contact you to setup your own farm
                  whether in your balacony or garden or on roof.
                </p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input
                      type="phone"
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-gray-500"
                      placeholder="Phone number"
                      aria-label="Phone number"
                    />
                    <input
                      className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 text-white placeholder-gray-500 lg:mx-2"
                      type="text"
                      placeholder="Address"
                      aria-label="Address"
                    />
                    <button
                      className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                      href="#0"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">
                    Setup starts with 70EGP.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}