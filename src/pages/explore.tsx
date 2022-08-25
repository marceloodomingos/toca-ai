import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";

import { Features, MostPopularSongs, Presentation } from "~/styles/pages/home";
import { SearchContainer } from "~/styles/pages/explore";
import { useEffect, useRef, useState } from "react";
import { apiTop200BrazilDaily } from "~/services/spotifyApi";
import { Heart, MaskHappy, MusicNotesPlus, PlayCircle } from "phosphor-react";
import Footer from "~/components/Footer";

const Explore: NextPage = () => {
  const [musics, setMusics] = useState([]);

  const MostPopularSongsRef = useRef(null);

  useEffect(() => {
    apiTop200BrazilDaily.then((response) => {
      setMusics(response.slice(0, 200));
    });
  }, []);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <Head>
        <title>Toca aí · Conheça as músicas mais tocadas do momento.</title>
      </Head>

      <Header />

      <main>
        <SearchContainer>
          <div className="info">
            <h1>Não encontrou o que queria?</h1>
            <p>Aqui você com certeza irá encontrar! Basta pesquisar as palavras chaves.</p>
          </div>
          <input type="text" placeholder="Digite aqui..." />
        </SearchContainer>
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
            </ul>
          </MostPopularSongs>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Explore;
