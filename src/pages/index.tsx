import type { NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
import { Features, MostPopularSongs, Presentation } from "~/styles/pages/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Toca aí · O player de música online mais útil do momento.</title>
      </Head>

      <Header />

      <main>
        <Presentation>
          <div className="about">
            <h1>Música na palma da sua mão.</h1>
            <p>Sua experiência musical mais descomplicada e divertida.</p>
          </div>
          <img
            src="../../images/holding-smartphone-animated.svg"
            alt="Holding an smartphone"
          />
        </Presentation>

        <Features>
          <div className="info">
            <h1>Sente a vibe</h1>
            <p>O melhor lugar para se esquecer dos problemas.</p>
          </div>
          <ul>
            <li>
              <i>🎵</i>
              <span>Músicas de todos os gostos</span>
              <p>
                Procure, encontre e escute o que e onde quiser. Sem
                preocupações.
              </p>
            </li>
            <li>
              <i>🎼</i>
              <span>Descubra novos estilos</span>
              <p>
                Nossos filtros estão disponíveis a todo momento para te ajudar
                em sua busca.
              </p>
            </li>
            <li>
              <i>🎶</i>
              <span>Diversão com seus amigos</span>
              <p>
                Com o <i>Music Party</i>, vocês podem aproveitar a mesma vibe
                juntos. De onde estiver!
              </p>
            </li>
          </ul>
        </Features>

        <MostPopularSongs>
          <div className="info">
            <h1>As melhores do momento</h1>
            <p>Top 10 músicas que o play nunca para.</p>
          </div>
          <ul>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b27367c738a703dc979f5c3c52ef"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b27369d097c052406563778630a4"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b2732dd9d9c0e4773dc0ba2d3104"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273d7abe44151a87f1bb075dd25"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b2739babf58f21e52d2835493a44"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b2731caa4ef8b96d6ae61b2254af"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273dcef82b22983d040a659a9a0"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.scdn.co/image/ab67616d0000b273613e73a94823952ca9af5430"
                alt=""
              />
            </li>
            <li></li>
            <li></li>
          </ul>
        </MostPopularSongs>
      </main>
    </>
  );
};

export default Home;
