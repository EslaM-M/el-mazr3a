import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "./header";
import Footer from "./footer";

import AOS from "aos";

export default function Page({ children, pushTopNav = true } = {}) {
  const { locale } = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      dir={locale === "ar" ? "rtl" : undefined}
    >
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className={`flex-grow ${pushTopNav ? "mt-28" : ""}`}>
        {children}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
