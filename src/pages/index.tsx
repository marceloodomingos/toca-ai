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
import { useEffect, useState } from "react";
import { apiTop10BrazilDaily } from "~/services/spotifyApi";
import {
  ArrowRight,
  Headphones,
  Heart,
  MaskHappy,
  MusicNotesPlus,
  PlayCircle,
} from "phosphor-react";
import Footer from "~/components/Footer";
import LoadingEllipsis from "~/components/Loading/LoadingEllipsis";
import axios from "axios";

export const getStaticProps: GetStaticProps = async () => {
  const data = await apiTop10BrazilDaily;

  return { props: { musicsList: data || null } };
};

const Home: NextPage = ({ musicsList }: any) => {
  const [musics, setMusics] = useState([]);
  const [musicsUri, setMusicsUri] = useState([]);

  console.log(NEXT_PUBLIC_TOP_200_TRACKS_URL);

  useEffect(() => {
    if (musicsList) {
      setMusics(musicsList);
    }
  }, [musicsList]);

  useEffect(() => {
    async function getMusicsUri() {
      const getMusics = musics.map(async (music, index) => {
        const trackUriID = music.trackMetadata.trackUri.replace(
          "spotify:track:",
          ""
        );

        if (index <= 10) {
          const getPreviewMusicUrl = await axios.get(
            process.env.NEXT_PUBLIC_GET_PREVIEW_MUSIC_URL,
            {
              params: {
                ids: trackUriID,
              },
              headers: {
                "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SEARCH_API_KEY,
                "X-RapidAPI-Host": process.env.NEXT_PUBLIC_SEARCH_API_HOST,
              },
            }
          );

          return {
            preview_url: getPreviewMusicUrl.data.tracks[0].preview_url,
          };
        }
      });

      const getPreviewUrl = await Promise.all(getMusics).then((response) =>
        setMusicsUri(response)
      );
      console.log(getPreviewUrl);
    }

    getMusicsUri();
  }, [musics]);

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
                Saiba mais <ArrowRight />
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
          <>
            {musics.length > 0 ? (
              <MostPopularSongs>
                <div className="info">
                  <h1>Bombando no Brasil</h1>
                  <p>As músicas diárias em que o play não para.</p>
                </div>
                <ul>
                  <>
                    {musics.map((music, index) => {
                      return (
                        <li
                          key={index}
                          id={music.trackMetadata.trackUri.replace(
                            "spotify:track:",
                            ""
                          )}
                        >
                          <div className="metadata">
                            <p>
                              <i>#</i>
                              {music.chartEntryData.currentRank}
                            </p>
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
                                    if (
                                      music.trackMetadata.artists.length > 0
                                    ) {
                                      if (
                                        music.trackMetadata.artists.length === 1
                                      ) {
                                        return music.trackMetadata.artists[0]
                                          .name;
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

                                      if (
                                        music.trackMetadata.artists.length > 2
                                      ) {
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
                          <button
                            className="player"
                            // href={`https://open.spotify.com/track/${music.trackMetadata.trackUri.replace(
                            //   "spotify:track:",
                            //   ""
                            // )}`}
                          >
                            <PlayCircle />
                            {musicsUri.map((preview_url) => {
                              console.log(preview_url);

                              if (
                                preview_url === music.trackMetadata.trackUri
                              ) {
                                return (
                                  <audio>
                                    <source src={preview_url} />
                                  </audio>
                                );
                              }
                            })}
                          </button>
                        </li>
                      );
                    })}
                    <Link href="./explore">
                      <button>Descobrir mais...</button>
                    </Link>
                  </>
                </ul>
              </MostPopularSongs>
            ) : (
              <MostPopularSongs>
                <div className="info">
                  <h1>Bombando no Brasil</h1>
                  <p>As músicas diárias em que o play não para.</p>
                </div>
                <LoadingEllipsis />
              </MostPopularSongs>
            )}
          </>
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
                galeria de músicas?{" "}
                <u>
                  Assim vocês poderão aproveitar e usufruir do{" "}
                  <i>Music Party</i>.
                </u>
              </p>
              <a
                href="whatsapp://send?text=Ei! Vem aproveitar o *Toca aí* comigo, tem várias músicas legais!%0a%0aSó acessar:%0ahttps://toca-ai.vercel.app"
                data-action="share/whatsapp/share"
                target="_blank"
                rel="noreferrer"
              >
                Dar um toque <ArrowRight />
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
