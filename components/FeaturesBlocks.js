import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-green-600 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-full mx-96 px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <h2 className="h2  text-green-600">Why Use Mosmera ?</h2>
            {/* <p className="text-xl text-gray-600">
              The Garden is an agriculture service that helps you to plant your
              home with Fruitful plants and provide consultation for making
              these plants grow the right way.
            </p> */}
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="/images/eye-solid.svg" width="100" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Preview
              </h4>
              <p className="text-gray-600 text-center">
                the place you want to plant and determine the plants that can be
                planted
              </p>
            </div>
            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="/images/plant.svg" width="100" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Plant
              </h4>
              <p className="text-gray-600 text-center">
                Your the place you want like  garden, house roof or balcony .
              </p>
            </div>
            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img src="/images/phone.svg" width="100" />

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Follow Up
              </h4>
              <p className="text-gray-600 text-center">
                Through mobile app that remind you with the daily activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
