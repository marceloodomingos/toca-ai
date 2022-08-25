import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Header from "~/components/Header";

import { Features, MostPopularSongs, Presentation } from "~/styles/pages/home";
import { SearchContainer } from "~/styles/pages/explore";
import { useEffect, useRef, useState } from "react";
import { apiTop200BrazilDaily } from "~/services/spotifyApi";
import { Heart, MaskHappy, MusicNotesPlus, PlayCircle } from "phosphor-react";
import Footer from "~/components/Footer";

const Explore: NextPage = () => { 
  const [musics, setMusics] = useState([]);
  const [musicsResults, setMusicsResults] = useState([]);
  const [search, setSearch] = useState("");

  const MostPopularSongsRef = useRef(null);

  useEffect(() => {
    if (!search) {
      apiTop200BrazilDaily.then((response) => {
        setMusics(response.slice(0, 200));
      });
    }
  }, [search]);

  useEffect(() => {
    if (search) {
      const delayDebounce = setTimeout(() => {
        const getMusics = async () => {
          const res = await axios.get(process.env.SEARCH_URL, { params: {
            q: search,
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
          }, headers: {
            'X-RapidAPI-Key': process.env.SEARCH_API_KEY,
            'X-RapidAPI-Host': process.env.SEARCH_API_HOST,
          }});
          setMusicsResults(res.data);
        }
    
        getMusics();
      }, 3000)
  
      return () => clearTimeout(delayDebounce)
    }
  }, [search])

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
          <input type="text" placeholder="Digite aqui..." onChange={(e) => setSearch(e.target.value)} />
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
        {search && <MostPopularSongs ref={MostPopularSongsRef}>
            <div className="info">
              <h1>Encontrou agora?</h1>
              <p>Estes foram os resultados para sua pesquisa ({search}).</p>
            </div>
            <ul>
              {JSON.stringify(musicsResults)}
            </ul>
          </MostPopularSongs>}
      </main>

      <Footer />
    </>
  );
};

export default Explore;
