import {} from "react";

import HeroHome from "../components/HeroHome";
import FeaturesBlocks from "../components/FeaturesBlocks";
import ContactUs from "../components/ContactUs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const DynamicGallery = dynamic(() => import("../components/Gallery"));
import Items from "../components/Items";
import { Page } from "../components/shared";

export default function Home(props) {
  return (
    <Page pushTopNav={false}>
      <HeroHome />
      <DynamicGallery />
      <FeaturesBlocks />
      <Items />
      <ContactUs />
    </Page>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "landing", "crops"])),
      // Will be passed to the page component as props
    },
  };
}
