import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alike+Angular&family=Anonymous+Pro:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preload"
          href="/favicon.svg"
          as="image"
          type="image/svg+xml"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
