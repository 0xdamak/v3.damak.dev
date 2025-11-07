import { useState, useEffect } from "react";
import { DefaultSeo } from "next-seo";
import { Layout } from "../components/layout";
import { PreLoader } from "../components/ui/pre-loader";
import { SEO } from "../seo.config";
import Head from "next/head";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loader) {
    return <PreLoader />;
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
