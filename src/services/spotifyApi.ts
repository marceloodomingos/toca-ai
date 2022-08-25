import axios from "axios";

const optionsTop200BrazilDaily = {
  method: "GET",
  url: "https://spotify81.p.rapidapi.com/top_200_tracks",
  params: { country: "BR", period: "daily" },
  headers: {
    "X-RapidAPI-Key": "c3ca0d6a7cmsh562a8864a08ee25p1bbec9jsn0f9276f83b0d",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
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
  url: "https://spotify23.p.rapidapi.com/playlist_tracks/",
  params: { id: "37i9dQZF1DX4Wsb4d7NKfP", offset: "0", limit: "100" },
  headers: {
    "X-RapidAPI-Key": "c3ca0d6a7cmsh562a8864a08ee25p1bbec9jsn0f9276f83b0d",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
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
