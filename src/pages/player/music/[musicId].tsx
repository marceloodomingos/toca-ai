import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import {
  ArrowClockwise,
  ArrowCounterClockwise,
  Pause,
  Play,
  SpeakerHigh,
  SpeakerLow,
  SpeakerNone,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import useImageColor from "use-image-color";
import FullScreenLoadingEllipsis from "~/components/Loading/FullScreenLoadingEllipsis";
import {
  AudioLyrics,
  PlayerAudioControls,
  PlayerControlsContainer,
} from "~/styles/pages/player/music-page";

const PlayerArtistPage: NextPage = () => {
  const router = useRouter();

  const [musicData, setMusicData] = useState<any>([]);
  const [musicUrlData, setMusicUrlData] = useState<any>([]);
  const [musicLyric, setMusicLyrics] = useState<any>([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);

  const audioSourceRef = useRef(null);
  const progressBar = useRef(null);
  const progressBarVolume = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const getMusicInfo = async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_GET_PREVIEW_MUSIC_URL,
        {
          params: {
            ids: router.query.musicId,
          },
          headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SEARCH_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_SEARCH_API_HOST,
          },
        }
      );

      if (res) {
        setMusicData(res.data);
      }
    };

    getMusicInfo();
  }, [router.query.musicId]);

  useEffect(() => {
    if (musicData && musicData.tracks) {
      const getMusicUrl = async () => {
        const musicUrl = await axios.get(
          process.env.NEXT_PUBLIC_GET_FULL_MUSIC_URL,
          {
            params: {
              track: musicData.tracks[0].uri?.replace("spotify:track:", ""),
            },
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GET_FULL_MUSIC_KEY,
              "X-RapidAPI-Host": process.env.NEXT_PUBLIC_GET_FULL_MUSIC_HOST,
            },
          }
        );

        const musicLyrics = await axios.get(
          process.env.NEXT_PUBLIC_GET_MUSIC_LYRICS_URL,
          {
            params: {
              trackId: musicData.tracks[0].uri?.replace("spotify:track:", ""),
              format: "json",
            },
            headers: {
              "X-RapidAPI-Key": process.env.NEXT_PUBLIC_GET_FULL_MUSIC_KEY,
              "X-RapidAPI-Host": process.env.NEXT_PUBLIC_GET_FULL_MUSIC_HOST,
            },
          }
        );

        if (musicUrl) {
          setMusicUrlData(musicUrl.data);
        } 

        if (musicLyrics) {
          setMusicUrlData(musicLyrics.data);
        } 

        // router.push(
        //   `/player/${musicUrlData?.spotifyTrack?.artists[0].name
        //     .toLowerCase()
        //     .replace(" ", "-")}/${musicUrlData?.spotifyTrack?.name
        //     .toLowerCase()
        //     .replace(" ", "-")}`,
        //   undefined,

        //   { shallow: true }
        // );
      };

      getMusicUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicData]);

  useEffect(() => {
    if (audioSourceRef.current) {
      setDuration(Math.floor(audioSourceRef.current.duration));
      progressBar.current.max = Math.floor(audioSourceRef.current.duration);
      progressBarVolume.current.max = 1;
    }
  }, [
    audioSourceRef?.current?.loadedmetadata,
    audioSourceRef?.current?.readyState,
  ]);

  useEffect(() => {
    if (
      progressBar &&
      progressBar.current?.value === progressBar.current?.max
    ) {
      setIsPlaying(false);
    }
  }, [progressBar?.current?.value]);

  const { colors } = useImageColor(
    musicUrlData.spotifyTrack?.album?.cover[2].url,
    { cors: true, colors: 5 }
  );

  const calculateTime = (ms) => {
    const msToSeconds = Math.floor(ms);

    const minutes = Math.floor(msToSeconds / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(msToSeconds % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      audioSourceRef.current.play();

      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioSourceRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    audioSourceRef.current.volume = currentVolume;

    progressBar.current.value = audioSourceRef.current.currentTime;
    changePlayerCurrentTime();

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioSourceRef.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${currentTime / duration}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const changeVolume = () => {
    progressBarVolume.current.value = audioSourceRef.current.volume;
    setCurrentVolume(Math.floor(progressBar.current.value) / 100);
  };

  const backThirty = () => {
    progressBar.current.value = progressBar.current.value - 30;
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = progressBar.current.value + 30;
    changeRange();
  };

  return (
    <>
      <Head>
        <title>
          High Five Player ·{" "}
          {musicUrlData.spotifyTrack
            ? musicUrlData.spotifyTrack.name
            : "Carregando..."}
        </title>
      </Head>

      <main>
        {musicUrlData && musicUrlData.youtubeVideo?.audio ? (
          <>
            <PlayerControlsContainer colorBg={colors && colors[0]}>
              <PlayerAudioControls
                color0={colors && colors[0]}
                color1={colors && colors[1]}
                color2={colors && colors[2]}
                color3={colors && colors[3]}
              >
                {musicUrlData && musicUrlData.youtubeVideo?.audio && (
                  <>
                    <audio
                      controlsList="nodownload noplaybackrate"
                      ref={audioSourceRef}
                    >
                      {musicUrlData.youtubeVideo.audio.map((audio) => {
                        return (
                          <source
                            key={audio.size}
                            src={audio.url}
                            type={audio.mimeType}
                          />
                        );
                      })}
                    </audio>

                    <div className="control-panel">
                      <div></div>
                      <div className="actual-music">
                        <div className="action-buttons">
                          <button onClick={backThirty}>
                            <ArrowCounterClockwise />
                          </button>
                          <button onClick={togglePlayPause}>
                            {isPlaying ? (
                              <Pause weight="fill" />
                            ) : (
                              <Play weight="fill" />
                            )}
                          </button>
                          <button onClick={forwardThirty}>
                            <ArrowClockwise />
                          </button>
                        </div>

                        <div className="current-time">
                          <p>{calculateTime(currentTime)}</p>
                          <input
                            type="range"
                            value={currentTime}
                            onChange={changeRange}
                            ref={progressBar}
                          />
                          <p>
                            {duration && (
                              <>
                                {calculateTime(Number(duration))}
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="volume">
                        {audioSourceRef?.current && (
                          <>
                            {audioSourceRef.current.muted && (
                            <SpeakerNone
                              onClick={() => {
                                audioSourceRef.current.muted =
                                  !audioSourceRef.current.muted;
                              }}
                            />
                          )}

                          {audioSourceRef.current.volume > 0 &&
                            audioSourceRef.current.volume <= 0.5 && (
                              <SpeakerLow
                                onClick={() => {
                                  audioSourceRef.current.muted =
                                    !audioSourceRef.current.muted;
                                }}
                              />
                            )}

                          {audioSourceRef.current.volume > 0.5 && (
                            <SpeakerHigh
                              onClick={() => {
                                audioSourceRef.current.muted =
                                  !audioSourceRef.current.muted;
                              }}
                            />
                          )}
                        </>
                        )}

                        <input
                          type="range"
                          value={currentVolume}
                          onChange={changeVolume}
                          ref={progressBarVolume}
                        />
                      </div>
                    </div>
                  </>
                )}
              </PlayerAudioControls>

              {musicUrlData.spotifyTrack?.album.cover && (
                <img
                  src={musicUrlData.spotifyTrack.album.cover[2].url}
                  alt={musicUrlData?.spotifyTrack?.artists[0].name}
                />
              )}

              {musicLyric && (
                <AudioLyrics
                  color0={colors && colors[0]}
                  color1={colors && colors[1]}
                  color2={colors && colors[2]}
                  color3={colors && colors[3]}
                >
                  <div className="about-music">
                    <div className="title">
                      <h1>{musicUrlData?.spotifyTrack?.name}</h1>
                      <span>{musicUrlData?.spotifyTrack?.artists[0].name}</span>
                    </div>
                    <img
                      src={
                        musicUrlData?.spotifyTrack?.artists[0].visuals.avatar[1]
                          .url
                      }
                      alt={musicUrlData?.spotifyTrack?.artists[0].name}
                    />
                  </div>
                  <ul>
                    {musicLyric.map((line, index) => {
                      return (
                        <p
                          key={index}
                          className={
                            currentTime.toString() ===
                            calculateTime(line.startMs)
                              ? "singing"
                              : ""
                          }
                          id={`startMs:${line.startMs} durMs:${line.durMs}`}
                        >
                          {line.text}
                        </p>
                      );
                    })}
                  </ul>
                </AudioLyrics>
              )}
            </PlayerControlsContainer>
          </>
        ) : (
          <FullScreenLoadingEllipsis />
        )}
      </main>
    </>
  );
};

export default PlayerArtistPage;
