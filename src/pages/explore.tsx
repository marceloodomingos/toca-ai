import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Header from "~/components/Header";

import { Features, MostPopularSongs, Presentation } from "~/styles/pages/home";
import { SearchContainer, SearchTopic } from "~/styles/pages/explore";
import { useEffect, useRef, useState } from "react";
import { apiTop200BrazilDaily } from "~/services/spotifyApi";
import {
  Heart,
  Link,
  MagnifyingGlass,
  MaskHappy,
  MusicNotesPlus,
  PlayCircle,
} from "phosphor-react";
import Footer from "~/components/Footer";
import { SearchResponse } from "~/models/spotifyResponse";

const Explore: NextPage = () => {
  const [musics, setMusics] = useState([]);
  const [musicsResults, setMusicsResults] = useState<any>();
  const [search, setSearch] = useState("");

  const MostPopularSongsRef = useRef(null);
  const SearchBarRef = useRef(null);

  useEffect(() => {
    if (!search) {
      apiTop200BrazilDaily.then((response) => {
        setMusics(response.slice(0, 200));
      });
    }

    if (search && search.length > 0) {
      const delayDebounce = setTimeout(() => {
        const getMusics = async () => {
          const res = await axios.get(process.env.SEARCH_URL, {
            params: {
              q: search,
              type: "multi",
              offset: "0",
              limit: "10",
              numberOfTopResults: "5",
            },
            headers: {
              "X-RapidAPI-Key": process.env.SEARCH_API_KEY,
              "X-RapidAPI-Host": process.env.SEARCH_API_HOST,
            },
          });
          setMusicsResults(res.data);
        };

        getMusics();
      }, 3000);

      return () => clearTimeout(delayDebounce);
    }
  }, [search]);

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
            <p>Aqui você com certeza irá encontrar!</p>
          </div>
          <div
            className="input"
            onClick={() => {
              SearchBarRef.current.focus();
            }}
          >
            <MagnifyingGlass />
            <input
              type="text"
              placeholder="Digite aqui..."
              onChange={(e) => setSearch(e.target.value)}
              ref={SearchBarRef}
            />
          </div>
        </SearchContainer>
        {musics && !search && (
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
        {search && (
          <>
            {musicsResults ? (
              <MostPopularSongs ref={MostPopularSongsRef}>
                <div className="info">
                  <h1>Encontrou agora?</h1>
                  <p>Estes foram os resultados para &quot;{search}&quot;.</p>
                </div>
                {musicsResults.tracks.items &&
                  musicsResults.tracks.items.length > 0 && (
                    <>
                      <SearchTopic>Músicas</SearchTopic>
                      <ul>
                        {musicsResults.tracks.items.map((track, index) => {
                          return (
                            <li key={index} id={track.data.id}>
                              <div className="metadata">
                                {/* <p>#{music.chartEntryData.currentRank}</p> */}
                                <img
                                  src={
                                    track.data.albumOfTrack.coverArt.sources[0]
                                      .url
                                  }
                                  alt={track.data.name}
                                />
                              </div>
                              <div className="about-music">
                                <span>{track.data.name}</span>
                                <div className="artists">
                                  <p>
                                    <>
                                      {(() => {
                                        if (
                                          track.data.artists.items.length > 0
                                        ) {
                                          if (
                                            track.data.artists.items.length ===
                                            1
                                          ) {
                                            return track.data.artists.items[0]
                                              .profile.name;
                                          }

                                          if (
                                            track.data.artists.items.length ===
                                            2
                                          ) {
                                            const artists =
                                              track.data.artists.items.map(
                                                (artist) => {
                                                  return artist.profile.name;
                                                }
                                              );

                                            return artists.join(" e ");
                                          }

                                          if (track.data.artists.length > 2) {
                                            const artists =
                                              track.data.artists.items.map(
                                                (artist) => {
                                                  return artist.profile.name;
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
                                rel="noreferrer"
                                target="_blank"
                              >
                                <PlayCircle />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}

                {musicsResults.albums.items &&
                  musicsResults.albums.items.length > 0 && (
                    <>
                      <SearchTopic>Álbuns</SearchTopic>
                      <ul>
                        {musicsResults.albums.items.map((album, index) => {
                          return (
                            <li
                              key={index}
                              id={album.data.uri.replace("spotify:track:", "")}
                            >
                              <div className="metadata">
                                {/* <p>#{music.chartEntryData.currentRank}</p> */}
                                <img
                                  src={album.data.coverArt.sources[0].url}
                                  alt={album.data.name}
                                />
                              </div>
                              <div className="about-music">
                                <span>{album.data.name}</span>
                                <div className="artists">
                                  <p>
                                    <>
                                      {(() => {
                                        if (
                                          album.data.artists.items.length > 0
                                        ) {
                                          if (
                                            album.data.artists.items.length ===
                                            1
                                          ) {
                                            return album.data.artists.items[0]
                                              .profile.name;
                                          }

                                          if (
                                            album.data.artists.items.length ===
                                            2
                                          ) {
                                            const artists =
                                              album.data.artists.items.map(
                                                (artist) => {
                                                  return artist.profile.name;
                                                }
                                              );

                                            return artists.join(" e ");
                                          }

                                          if (album.data.artists.length > 2) {
                                            const artists =
                                              album.data.artists.items.map(
                                                (artist) => {
                                                  console.log(artist);
                                                  return artist.profile.name;
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
                                rel="noreferrer"
                                target="_blank"
                              >
                                <Link />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}

                {musicsResults.artists.items &&
                  musicsResults.artists.items.length > 0 && (
                    <>
                      <SearchTopic>Artistas</SearchTopic>
                      <ul>
                        {musicsResults.artists.items.map((artist, index) => {
                          return (
                            <li
                              key={index}
                              id={artist.data.uri.replace(
                                "spotify:artist:",
                                ""
                              )}
                            >
                              <div className="metadata">
                                {/* <p>#{music.chartEntryData.currentRank}</p> */}
                                <img
                                  src={
                                    artist.data.visuals.avatarImage.sources[0]
                                      .url
                                  }
                                  alt={artist.data.profile.name}
                                />
                              </div>
                              <div className="about-music">
                                <span>{artist.data.profile.name}</span>
                              </div>
                              <a
                                className="player"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <Link />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}

                {/* <SearchTopic>Playlists</SearchTopic>
                <SearchTopic>Podcasts</SearchTopic> */}
              </MostPopularSongs>
            ) : (
              <p>Carregando...</p>
            )}
          </>
        )}
        <SearchContainer>
          <div className="info">
            <h1>Não encontrou?</h1>
            <p>
              Que pena que nossos filtros não ajudaram tanto assim de primeira.
              Você pode tentar ser mais específico ou pesquisar por palavras
              chaves que se refiram à sua busca.
            </p>
          </div>
        </SearchContainer>
      </main>

      <Footer />
    </>
  );
};

export default Explore;
