import type { NextPage } from "next";
import Head from "next/head";
import { ArrowRight, Headphones } from "phosphor-react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import {
  RainbowSeptemberPresentation,
  RainbowSeptemberWelcome,
} from "~/styles/pages/promotion/rainbow-september";

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
              Deixe sua playlist super colorida e recheada com o{" "}
              <i>Rainbow September</i>.
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
        <RainbowSeptemberPresentation>
          <div className="container">
            <div>
              <h1>Aproveite e relaxe.</h1>
              <p>
                Uma imensidão de músicas. Muito mais por muito menos. Tudo da
                forma que você quiser, exatamente do seu jeitinho.
              </p>
              <a target="_blank" rel="noreferrer">
                Ver mais <ArrowRight />
              </a>
            </div>
            <img
              src="../../images/listening-happy-music-whitout-bg.svg"
              alt="Holding an smartphone"
            />
          </div>
        </RainbowSeptemberPresentation>
      </main>
      <Footer dark />
    </>
  );
};

export default RainbowSeptember;
