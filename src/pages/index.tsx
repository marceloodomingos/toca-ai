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
  const [musicsFilter, setMusicsFilter] = useState(10);

  const MostPopularSongsRef = useRef(null);

  useEffect(() => {
    apiTop200BrazilDaily.then((response) => {
      setMusics(response.slice(0, musicsFilter));
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

                    {/* <img
                      src={music.track.album.images[1].url}
                      alt={music.track.name}
                    />
                    <div className="about-music">
                      <span>{music.track.name}</span>
                      <div className="artists">
                        {music.track.artists.length > 0 ? (
                          music.track.artists.map((artist) => {
                            return <p key={artist.name}>{artist.name}</p>;
                          })
                        ) : (
                          <p>{music.track.artists[0].name}</p>
                        )}
                      </div>
                      <div className="music-info">
                        <p>
                          {
                            millisToMinutesAndSeconds(music.track.duration_ms)
                              .minutes
                          }
                          :
                          {
                            millisToMinutesAndSeconds(music.track.duration_ms)
                              .seconds
                          }
                        </p>
                        <audio controls autoPlay>
                          <source src={music.track.preview_url} />
                        </audio>
                      </div>
                    </div> */}
                  </li>
                );
              })}

              {musicsFilter < 100 && (
                <button
                  onClick={() => {
                    if (musicsFilter < 100) {
                      setMusicsFilter(musicsFilter + 10);
                    }
                  }}
                >
                  Carregar mais...
                </button>
              )}

              {musicsFilter > 10 && musicsFilter <= 100 && (
                <button
                  onClick={() => {
                    if (musicsFilter > 10 && musicsFilter <= 100) {
                      scrollToRef(MostPopularSongsRef);
                      setMusicsFilter(10);
                    }
                  }}
                >
                  Mostrar menos
                </button>
              )}
            </ul>
          </MostPopularSongs>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Home;
