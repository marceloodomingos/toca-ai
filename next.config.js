/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  root: true,
  images: {
    disableStaticImages: true,
  },
  env: {
    node: true,
    TOP_200_TRACKS_URL: "https://spotify81.p.rapidapi.com/top_200_tracks",
    TOP_200_TRACKS_API_HOST: "spotify81.p.rapidapi.com",
    TOP_200_TRACKS_API_KEY:
      "82a3952098mshd281f2297ff1909p18027ejsn601cd78f7fd9",

    GET_PREVIEW_MUSIC_URL: "https://spotify23.p.rapidapi.com/tracks/",

    RANDOM_PLAYLIST_TRACKS_URL:
      "https://spotify23.p.rapidapi.com/playlist_tracks/",
    RANDOM_PLAYLIST_TRACKS_API_HOST: "spotify23.p.rapidapi.com",
    RANDOM_PLAYLIST_TRACKS_API_KEY:
      "82a3952098mshd281f2297ff1909p18027ejsn601cd78f7fd9",

    SEARCH_URL: "https://spotify23.p.rapidapi.com/search/",
    SEARCH_API_HOST: "spotify23.p.rapidapi.com",
    SEARCH_API_KEY: "82a3952098mshd281f2297ff1909p18027ejsn601cd78f7fd9",
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
