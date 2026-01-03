import React from "react";

const coursesData = [
  {
    title: "Fundamentals of Nursing",
    description: "Learn the basic concepts of nursing, patient care, and safety.",
    link: "https://www.nursingcourses.com/fundamentals",
    level: "Beginner"
  },
  {
    title: "Anatomy & Physiology for Nurses",
    description: "Comprehensive guide to human anatomy & physiology for nursing practice.",
    link: "https://www.nursingcourses.com/anatomy-physiology",
    level: "Intermediate"
  },
  {
    title: "Pharmacology Essentials",
    description: "Learn drugs, dosages, and safe administration for nursing students.",
    link: "https://www.nursingcourses.com/pharmacology",
    level: "Advanced"
  },
  {
    title: "Online Nursing Free Certificate",
    description: "Complete this free online nursing course and receive a certificate.",
    link: "https://www.nursingcourses.com/free-certificate",
    level: "All Levels"
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Free Nursing Courses</h2>
      <div className="flex flex-col gap-5">
        {coursesData.map((course, idx) => (
          <div
            key={idx}
            className="bg-[#101b34] p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <div>
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p>{course.description}</p>
              <p className="text-sm text-gray-300">Level: {course.level}</p>
            </div>
            <a
              href={course.link}
              target="_blank"
              className="px-4 py-2 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] transition text-white font-semibold"
            >
              Start Course
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
