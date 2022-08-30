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
    NEXT_PUBLIC_TOP_200_TRACKS_API_KEY: "82a3952098mshd281f2297ff1909p18027ejsn601cd78f7fd9",

    NEXT_PUBLIC_GET_PREVIEW_MUSIC_URL: "https://spotify23.p.rapidapi.com/tracks/",

    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_URL: "https://spotify23.p.rapidapi.com/playlist_tracks/",
    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_API_HOST: "spotify23.p.rapidapi.com",
    NEXT_PUBLIC_RANDOM_PLAYLIST_TRACKS_API_KEY: "c3ca0d6a7cmsh562a8864a08ee25p1bbec9jsn0f9276f83b0d",

    NEXT_PUBLIC_SEARCH_URL: "https://spotify23.p.rapidapi.com/search/",
    NEXT_PUBLIC_SEARCH_API_HOST: "spotify23.p.rapidapi.com",
    NEXT_PUBLIC_SEARCH_API_KEY: "962d3f46a9mshfd949b87eb24003p14f95ajsnaba5beb914b7",

    NEXT_PUBLIC_GET_FULL_MUSIC_URL: "https://spotify-scraper.p.rapidapi.com/v1/track/download",
    NEXT_PUBLIC_GET_FULL_MUSIC_HOST: "spotify-scraper.p.rapidapi.com",
    NEXT_PUBLIC_GET_FULL_MUSIC_KEY: "d2bee321c0msh702295ed01405eep1070bcjsnace3629ec120",

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
