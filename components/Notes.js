import React from "react";

const notesData = [
  {
    title: "Nursing Fundamentals Notes",
    description: "Basic concepts of nursing care, patient safety, and hygiene procedures.",
    link: "https://www.nursingresources.com/notes/fundamentals.pdf",
  },
  {
    title: "Anatomy & Physiology Notes",
    description: "Comprehensive notes on human anatomy and physiology for nurses.",
    link: "https://www.nursingresources.com/notes/anatomy-physiology.pdf",
  },
  {
    title: "Pharmacology Notes",
    description: "Drug information, dosages, and administration guidelines for nursing students.",
    link: "https://www.nursingresources.com/notes/pharmacology.pdf",
  },
  {
    title: "Nursing Procedures Guide",
    description: "Step-by-step instructions for common nursing procedures.",
    link: "https://www.nursingresources.com/notes/procedures.pdf",
  },
  // Add more notes as needed
];

const Notes = () => {
  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Nursing Notes & Procedures</h2>
      <div className="flex flex-col gap-5">
        {notesData.map((note, idx) => (
          <div
            key={idx}
            className="bg-[#101b34] p-5 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          >
            <div>
              <h3 className="font-semibold text-lg">{note.title}</h3>
              <p>{note.description}</p>
            </div>
            <a
              href={note.link}
              target="_blank"
              className="px-4 py-2 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] transition text-white font-semibold"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
