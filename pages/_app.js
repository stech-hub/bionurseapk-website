import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="Xph8kvaL-aAkTHe30pd74SqDHgdUFGDx7p3TLie_LTI"
        />
        <title>BioNurse – Free Nursing Study App for Students Worldwide</title>
        <meta
          name="description"
          content="BioNurse is a free nursing study app for nursing students with notes, quizzes, courses, scholarships, and exam preparation worldwide."
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
