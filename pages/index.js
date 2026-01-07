import Head from "next/head";
import Layout from "../components/Layout";
import Scholarships from "../components/Scholarships";
import Courses from "../components/Courses";
import Notes from "../components/Notes";
import Quizzes from "../components/Quizzes";
import Support from "../components/Support";

export default function Home() {
  return (
    <>
      <Head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="Xph8kvaL-aAkTHe30pd74SqDHgdUFGDx7p3TLie_LTI"
        />

        {/* SEO Title */}
        <title>BioNurse – Free Nursing Study App for Students Worldwide</title>

        {/* SEO Description */}
        <meta
          name="description"
          content="BioNurse is a free nursing study app that helps nursing students with notes, quizzes, courses, scholarships, and exam preparation worldwide."
        />

        {/* SEO Keywords (light use, safe) */}
        <meta
          name="keywords"
          content="nursing app, nursing study app, free nursing app, nursing students app, medical study app"
        />
      </Head>

      <Layout>
        {/* Landing Box */}
        <div className="bg-[#101b34] p-10 rounded-2xl shadow-lg max-w-xl w-full text-center">
          <h1 className="text-2xl text-[#1e90ff] font-bold mb-3">
            Free Nursing Study App for Students
          </h1>

          <p className="mb-5">
            Download BioNurse — a free nursing app with notes, quizzes, courses,
            and exam preparation tools for students worldwide.
          </p>

          <a
            href="https://github.com/stech-hub/bionurseapk-website/releases/download/v1/myapp.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#1e90ff] rounded-lg text-white font-semibold hover:bg-[#63b3ff] transition transform hover:scale-105"
          >
            Download BioNurse APK
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb6qja16buMAUsybF741"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-[#25D366] rounded-lg text-white font-semibold hover:bg-[#43e07b] transition"
          >
            Join Nursing Study WhatsApp Channel
          </a>

          <p className="mt-4">Version: 1.0 | Size: 7.13 MB</p>
          <p>Developed by Akin S. Sokpah from Liberia 🇱🇷</p>
        </div>

        {/* Scholarships Section */}
        <Scholarships />

        {/* Courses Section */}
        <Courses />

        {/* Notes Section */}
        <Notes />

        {/* Quizzes Section */}
        <Quizzes />

        {/* Support Section */}
        <Support />
      </Layout>
    </>
  );
}
