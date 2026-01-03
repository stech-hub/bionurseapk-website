import React, { useState } from "react";
import jsPDF from "jspdf";

const quizData = [
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    answer: "Vitamin K",
  },
  {
    question: "Normal adult heart rate is between:",
    options: ["60-100 bpm", "40-60 bpm", "100-120 bpm", "120-150 bpm"],
    answer: "60-100 bpm",
  },
  {
    question: "What is the first step in hand hygiene?",
    options: ["Dry hands", "Apply soap", "Wet hands", "Use sanitizer"],
    answer: "Wet hands",
  },
  // Add more questions here for 1000+ quizzes
];

const Quizzes = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[current].answer) setScore(score + 1);
    if (current + 1 < quizData.length) setCurrent(current + 1);
    else setCompleted(true);
  };

  const generateCertificate = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("BioNurse Platform Certificate", 20, 30);
    doc.setFontSize(16);
    doc.text(`This certifies that you scored ${score} out of ${quizData.length}`, 20, 50);
    doc.text("Congratulations on your achievement!", 20, 70);
    doc.save("BioNurse_Certificate.pdf");
  };

  return (
    <div className="bg-[#0a1526] p-8 rounded-2xl shadow-lg max-w-4xl w-full mt-10">
      <h2 className="text-2xl text-[#1e90ff] font-bold mb-5 text-center">Quizzes & Tests</h2>

      {!completed ? (
        <div className="bg-[#101b34] p-5 rounded-xl">
          <h3 className="font-semibold text-lg mb-3">{quizData[current].question}</h3>
          <div className="flex flex-col gap-3">
            {quizData[current].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="px-4 py-2 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] text-white font-semibold transition"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-3 text-gray-300">
            Question {current + 1} of {quizData.length}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">Quiz Completed!</h3>
          <p className="mb-5">You scored {score} out of {quizData.length}</p>
          <button
            onClick={generateCertificate}
            className="px-6 py-3 bg-[#1e90ff] rounded-lg hover:bg-[#63b3ff] text-white font-semibold transition"
          >
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;
