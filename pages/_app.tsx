import "../styles/globals.css";

import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main id="app" className="app flex justify-center">
      <Navbar />
      <div className="component-wrapper relative mt-[3.25rem] w-[80vw] max-w-[1680px]">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
