import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";

import { Features, MostPopularSongs, Presentation } from "~/styles/pages/home";
import { useEffect, useRef, useState } from "react";
import { apiTop200BrazilDaily } from "~/services/spotifyApi";
import { Heart, MaskHappy, MusicNotesPlus, PlayCircle } from "phosphor-react";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  const [musics, setMusics] = useState([]);

  const MostPopularSongsRef = useRef(null);

  useEffect(() => {
    apiTop200BrazilDaily.then((response) => {
      setMusics(response.slice(0, 10));
    });
  }, [musicsFilter]);

  function millisToMinutesAndSeconds(ms) {
    const date = new Date(ms);
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return { minutes, seconds };
  }

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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
          <MostPopularSongs ref={MostPopularSongsRef}>
            <div className="info">
              <h1>As melhores do momento</h1>
              <p>As músicas diárias em que o play não para.</p>
            </div>
            <ul>
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
                                if (music.trackMetadata.artists.length === 1) {
                                  return music.trackMetadata.artists[0].name;
                                }

                                if (music.trackMetadata.artists.length === 2) {
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
              <Link href="./explore">Descobrir mais...</Link>
            </ul>
          </MostPopularSongs>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
