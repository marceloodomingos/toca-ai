import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";

import {
  Features,
  InviteFriend,
  MostPopularSongs,
  Presentation,
} from "~/styles/pages/home";
import { useEffect, useRef, useState } from "react";
import { apiTop200BrazilDaily } from "~/services/spotifyApi";
import {
  ArrowRight,
  Headphones,
  Heart,
  MaskHappy,
  MusicNotesPlus,
  PlayCircle,
} from "phosphor-react";
import Footer from "~/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const data = await apiTop200BrazilDaily;

  return { props: { musicsList: data || null } };
};

const Home: NextPage = ({ musicsList }: any) => {
  const [musics, setMusics] = useState([]);
  const [musicsUri, setMusicsUri] = useState({});

  useEffect(() => {
    if (musicsList) {
      setMusics(musicsList.slice(0, 10));
    }
  }, [musicsList]);

  return (
    <>
      <Head>
        <title>Toca aí · O player de música online mais útil do momento.</title>
      </Head>

      <Header />

      <main>
        <Presentation>
          <div className="about">
            <h1>Músicas na palma da sua mão.</h1>
            <p>Sua experiência musical mais descomplicada e divertida.</p>
            <Link href="/">
              <a>
                Começar agora <ArrowRight />
              </a>
            </Link>
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
              <Heart />
              <span>Músicas de todos os gostos</span>
              <p>
                Procure, encontre e escute o que e onde quiser. Sem
                preocupações.
              </p>
            </li>
            <li>
              <MusicNotesPlus />
              <span>Descubra novos estilos</span>
              <p>
                Nossos filtros estão disponíveis a todo momento para te ajudar
                em sua busca.
              </p>
            </li>
            <li>
              <MaskHappy />
              <span>Diversão com seus amigos</span>
              <p>
                Com o <i>Music Party</i>, vocês podem aproveitar a mesma vibe
                juntos. De onde estiver!
              </p>
            </li>
          </ul>
        </Features>

        {musics && (
          <MostPopularSongs>
            <div className="info">
              <h1>Bombando no Brasil</h1>
              <p>As músicas diárias em que o play não para.</p>
            </div>
            <ul>
              <>
                {musics.map((music, index) => {
                  // setMusicsUri({
                  //   ...musicsUri,
                  //   index: music.trackMetadata.trackUri,
                  // });

                  // const getMusics = async () => {
                  //   if (music.trackMetadata.trackUri) {
                  //     const res = await axios.get(
                  //       process.env.GET_PREVIEW_MUSIC_URL,
                  //       {
                  //         params: {
                  //           ids: music.trackMetadata.trackUri.replace(
                  //             "spotify:track:",
                  //             ""
                  //           ),
                  //         },
                  //         headers: {
                  //           "X-RapidAPI-Key": process.env.SEARCH_API_KEY,
                  //           "X-RapidAPI-Host": process.env.SEARCH_API_HOST,
                  //         },
                  //       }
                  //     );

                  //     console.log(res.data.tracks[0].preview_url);
                  //   }
                  // };

                  console.log(musicsUri);

                  return (
                    <li
                      key={index}
                      id={music.trackMetadata.trackUri.replace(
                        "spotify:track:",
                        ""
                      )}
                    >
                      <div className="metadata">
                        <p>#{music.chartEntryData.currentRank}</p>
                        <img
                          src={music.trackMetadata.displayImageUri}
                          alt={music.trackMetadata.trackName}
                        />
                      </div>
                      <div className="about-music">
                        <span>{music.trackMetadata.trackName}</span>
                        <div className="artists">
                          <p>
                            <>
                              {(() => {
                                if (music.trackMetadata.artists.length > 0) {
                                  if (
                                    music.trackMetadata.artists.length === 1
                                  ) {
                                    return music.trackMetadata.artists[0].name;
                                  }

                                  if (
                                    music.trackMetadata.artists.length === 2
                                  ) {
                                    const artists =
                                      music.trackMetadata.artists.map(
                                        (artist) => {
                                          return artist.name;
                                        }
                                      );

                                    return artists.join(" e ");
                                  }

                                  if (music.trackMetadata.artists.length > 2) {
                                    const artists =
                                      music.trackMetadata.artists.map(
                                        (artist) => {
                                          return artist.name;
                                        }
                                      );

                                    return artists.join(", ");
                                  }
                                }
                              })()}
                            </>
                          </p>
                        </div>
                      </div>
                      <a
                        className="player"
                        href={`https://open.spotify.com/track/${music.trackMetadata.trackUri.replace(
                          "spotify:track:",
                          ""
                        )}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <PlayCircle />
                      </a>
                    </li>
                  );
                })}
                <Link href="./explore">
                  <button>Descobrir mais...</button>
                </Link>
              </>
            </ul>
          </MostPopularSongs>
        )}

        <InviteFriend>
          <div className="container">
            <div>
              <h1>
                <Headphones />
                <i>Music Party</i>
              </h1>
              <p>
                Que tal uma companhia para aproveitar a imensidão da nossa
                galeria de músicas? Assim vocês poderão aproveitar e usufruir do{" "}
                <i>Music Party</i>.
              </p>
              <a
                href="whatsapp://send?text=Ei! Vem aproveitar o *Toca aí* comigo, tem várias músicas legais!%0a%0aSó acessar:%0ahttps://toca-ai.vercel.app"
                data-action="share/whatsapp/share"
                target="_blank"
                rel="noreferrer"
              >
                Convidar para cumprimento <ArrowRight />
              </a>
            </div>
            <img
              src="../../images/phone-call.svg"
              alt="Holding an smartphone"
            />
          </div>
        </InviteFriend>
      </main>

      <Footer />
    </>
  );
};

export default Home;
