import { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import Gallery from "../components/Gallery";
import FeaturesBlocks from "../components/FeaturesBlocks";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AOS from "aos";
import Items from "../components/Items";

export default function Home(props) {
  const { locale } = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      dir={locale === "ar" ? "rtl" : undefined}
    >
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        <Gallery />
        <FeaturesBlocks />
        <Items />
        <ContactUs />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["landing"])),
      // Will be passed to the page component as props
    },
  };
}
