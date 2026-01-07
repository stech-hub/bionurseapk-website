import Head from "next/head";
import Scholarships from "../components/Scholarships";
import Courses from "../components/Courses";
import Notes from "../components/Notes";
import Quizzes from "../components/Quizzes";
import Support from "../components/Support";

export default function Home() {
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
          content="BioNurse is a free nursing study app that helps nursing students with notes, quizzes, courses, scholarships, and exam preparation worldwide."
        />
      </Head>

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
          className="inline-block px-8 py-3 bg-[#1e90ff] rounded-lg text-white font-semibold"
        >
          Download BioNurse APK
        </a>
      </div>

      <Scholarships />
      <Courses />
      <Notes />
      <Quizzes />
      <Support />
    </>
  );
}
