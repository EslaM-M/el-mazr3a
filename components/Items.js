import React from "react";
import Image from "next/image";

function Items() {
  return (
    <section className="relative">
      <div className="max-w-full mx-96">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Products</h2>
          </div>
          {/* Items */}
          <div className="grid gap-2 grid-cols-4 md:grid-cols-9">
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/arrow_back.svg" width="100" height="100" />
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/tomato.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/lemon.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/tomato.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/lemon.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/tomato.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/lemon.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/tomato.jpg" width="300" height="300" />
              <p>Tomato</p>
            </div>
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <Image src="/images/arrow_forward.svg" width="100" height="100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;
