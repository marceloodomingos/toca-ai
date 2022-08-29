import type { NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const YourVibe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toca aí · Descubra sua vibe.</title>
      </Head>

      <Header />

      <main>
        <img src="../../images/flamenco-dance.svg" alt="" />
      </main>

      <Footer />
    </>
  );
};

export default YourVibe;
