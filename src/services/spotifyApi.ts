import axios from "axios";

const optionsTop200BrazilDaily = {
  method: "GET",
  url: process.env.TOP_200_TRACKS_URL,
  params: { country: "BR", period: "daily" },
  headers: {
    "X-RapidAPI-Key": process.env.TOP_200_TRACKS_API_KEY,
    "X-RapidAPI-Host": process.env.TOP_200_TRACKS_API_HOST,
  },
};

export const apiTop200BrazilDaily = axios
  .request(optionsTop200BrazilDaily)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });

const randomPlaylistOptions = {
  method: "GET",
  url: process.env.RANDOM_PLAYLIST_TRACKS_URL,
  params: { id: "5XGXPbAPHB7Qy0AsTHrg9x", offset: "0", limit: "100" },
  headers: {
    "X-RapidAPI-Key": process.env.RANDOM_PLAYLIST_TRACKS_API_KEY,
    "X-RapidAPI-Host": process.env.RANDOM_PLAYLIST_TRACKS_API_HOST,
  },
};

export const apiRandomPlaylistOptions = axios
  .request(randomPlaylistOptions)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.error(error);
  });
