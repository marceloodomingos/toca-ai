/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    disableStaticImages: true,
  },
  env: {
    node: true,
    NEXT_PUBLIC_TOP_200_TRACKS_URL: "https://spotify81.p.rapidapi.com/top_200_tracks",
    NEXT_PUBLIC_TOP_200_TRACKS_API_HOST: "spotify81.p.rapidapi.com",
    NEXT_PUBLIC_TOP_200_TRACKS_API_KEY: "060ee4ac4cmsh24f71febabe3864p1902c7jsn5b68341cd09d",

    NEXT_PUBLIC_GET_PREVIEW_MUSIC_URL: "https://spotify23.p.rapidapi.com/tracks/",

    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_URL: "https://spotify23.p.rapidapi.com/playlist_tracks/",
    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_API_HOST: "spotify23.p.rapidapi.com",
    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_API_KEY: "060ee4ac4cmsh24f71febabe3864p1902c7jsn5b68341cd09d",

    NEXT_PUBLIC_SEARCH_URL: "https://spotify23.p.rapidapi.com/search/",
    NEXT_PUBLIC_SEARCH_API_HOST: "spotify23.p.rapidapi.com",
    NEXT_PUBLIC_SEARCH_API_KEY: "060ee4ac4cmsh24f71febabe3864p1902c7jsn5b68341cd09d",

    NEXT_PUBLIC_GET_FULL_MUSIC_URL: "https://spotify-scraper.p.rapidapi.com/v1/track/download",
    NEXT_PUBLIC_GET_FULL_MUSIC_HOST: "spotify-scraper.p.rapidapi.com",
    NEXT_PUBLIC_GET_FULL_MUSIC_KEY: "060ee4ac4cmsh24f71febabe3864p1902c7jsn5b68341cd09d",

    NEXT_PUBLIC_GET_MUSIC_LYRICS_URL: "https://spotify-scraper.p.rapidapi.com/v1/track/lyrics",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/warnings",
  ],
  rules: {
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"]],
        "newlines-between": "always",
      },
    ],
  },
};
