import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import LandingPage from "./landingPage";

const Home: NextPage = () => {
  return (
    <>
      {/* <Head></Head> */}
      <link
        rel="preload"
        href="/fonts/JasonHandwriting/JasonHandwriting1.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/DiamorScript/Diamor.ttf"
        as="font"
        crossOrigin=""
      />
      <LandingPage />
    </>
  );
};

export default Home;
