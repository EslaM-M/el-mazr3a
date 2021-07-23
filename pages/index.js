import { useEffect } from "react";

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Gallery from '../components/Gallery';
import FeaturesBlocks from '../components/FeaturesBlocks';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AOS from "aos";
import Items from "../components/Items";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
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
  console.log(locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','gallery'])),
      // Will be passed to the page component as props
    },
  };
}