import React from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta name="MobileOptimized" content="768" />
          <meta
            name="keywords"
            content="música, musica, music, player, toca, ai, grátis, free"
          />
          <meta
            name="description"
            content="O novo web player de música mais útil. O melhor lugar para se esquecer dos problemas."
          />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Toca Aí - Sua experiência musical mais descomplicada e divertida."
          />
          <meta property="og:url" content="toca-ai.vercel.app" />
          <meta
            property="og:site_name"
            content="Toca Aí - Sua experiência musical mais descomplicada e divertida."
          />
          <meta property="og:image" content="../../logos/logo2-colored.png" />
          <meta
            property="og:image:secure_url"
            content="../../logos/logo2-colored.png"
          />
          <meta property="og:image:alt" content="avatar" />
          <meta property="og:image:height" content="400" />
          <meta property="og:image:width" content="600" />
          <meta
            property="og:description"
            content="O novo web player de música mais útil. O melhor lugar para se esquecer dos problemas."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="O novo web player de música mais útil. O melhor lugar para se esquecer dos problemas."
          />
          <meta
            name="twitter:description"
            content="O novo web player de música mais útil. O melhor lugar para se esquecer dos problemas."
          />
          <meta name="twitter:url" content="toca-ai.vercel.app" />
          <meta name="twitter:image" content="../../logos/logo2-colored.png" />
          <meta
            name="twitter:image:src"
            content="../../logos/logo2-colored.png"
          />
          <link
            href="../../logos/logo2-colored.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="../../logos/logo2-colored.png" />
          <meta name="theme-color" content="#f7f0d8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="../../logos/logo2-colored.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
