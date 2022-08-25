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
      "c3ca0d6a7cmsh562a8864a08ee25p1bbec9jsn0f9276f83b0d",

    RANDOM_PLAYLIST_TRACKS_URL:
      "https://spotify23.p.rapidapi.com/playlist_tracks/",
    RANDOM_PLAYLIST_TRACKS_API_HOST: "spotify23.p.rapidapi.com",
    RANDOM_PLAYLIST_TRACKS_API_KEY:
      "c3ca0d6a7cmsh562a8864a08ee25p1bbec9jsn0f9276f83b0d",
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
