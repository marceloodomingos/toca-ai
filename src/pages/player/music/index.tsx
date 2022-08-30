import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

// export const getServerSideProps: GetServerSideProps = async ({  }) => {
//   const data = await axios.get(
//     process.env.NEXT_PUBLIC_GET_PREVIEW_MUSIC_URL,
//     {
//       params: {
//         ids: trackUriID,
//       },
//       headers: {
//         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_SEARCH_API_KEY,
//         "X-RapidAPI-Host": process.env.NEXT_PUBLIC_SEARCH_API_HOST,
//       },
//     }
//   );

//   return { props: { musicsList: data || null } };
// };

const PlayerArtistPage: NextPage = () => {
  const body = document.querySelector("body");
  body.classList.add("high-five-player");

  return (
    <>
      <Head>
        <title>High Five Player · nome da musica</title>
      </Head>

      <main>
        <h1>?</h1>
      </main>
    </>
  );
};

export default PlayerArtistPage;
