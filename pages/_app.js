import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Xph8kvaL-aAkTHe30pd74SqDHgdUFGDx7p3TLie_LTI"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
