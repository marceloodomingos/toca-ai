import type { NextPage } from "next";
import Head from "next/head";
import { ArrowRight } from "phosphor-react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { RainbowSeptemberWelcome } from "~/styles/pages/promotion/rainbow-september";

const RainbowSeptember: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toca aí · Setembro arco-íris.</title>
      </Head>

      <Header white />
      <main style={{ backgroundColor: "black" }}>
        <RainbowSeptemberWelcome>
          <div className="info">
            <h1>Aproveite a chuva de cores!</h1>
            <p>
              Muito mais por muito menos. Deixe sua playlist super colorida!
            </p>
            <a href="">
              Saiba mais <ArrowRight />
            </a>
          </div>
          <img
            src="../../../images/promotions/rainbow-september.jpg"
            alt="Rainbow Goldfish"
          />
        </RainbowSeptemberWelcome>
      </main>
      <Footer dark />
    </>
  );
};

export default RainbowSeptember;
