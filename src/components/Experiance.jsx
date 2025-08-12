import { useState } from "react";
import css from "../../public/css.jpg";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  const exp = {
    id: 1,
    logo: css,
    title: "Associate Software Developer Intern",
    company: "Samsung Research and Development Institute",
    duration: "January 2025 – July 2025",
    bullets: [
      "Developed a dynamic hand gesture recognition system using the DHG dataset with 14+ gestures and 20+ subjects, applying depth-to-grayscale image conversion and improving recognition accuracy by 18% using CNN-based Init and Branch models.",
      "Created a custom stereo camera gesture dataset inspired by DHG, leveraging Python, OpenCV, and AI/ML techniques to enable real-time gesture detection with a 25% reduction in processing latency.",
      "Engineered a robust RAG pipeline for retrieving domain-specific documents and generating LLM-powered answers, integrating it securely with MCP server to support scalable, modular architecture deployed across internal teams.",
      "Spearheaded enhancements to internal workflows by integrating and optimizing client functionalities within Samsung’s RooCodebase, improving system efficiency by 30%.",
      "Successfully passed the Samsung Advanced Software Test on the first attempt, validating technical expertise and problem-solving skills."
    ]
  };

  return (
    <div
      id="experience" // ✅ Changed from name="Experiance" to id="experience"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16 scroll-mt-24"
    >
      <h1 className="text-3xl font-bold mb-5">Experience</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          <div
            key={exp.id}
            className="
              flex flex-col justify-between
              bg-pink-50 border border-pink-200 rounded-lg shadow-lg
              p-6
              transition-transform hover:scale-105
            "
          >
            <div className="flex flex-col items-center">
              <img
                src={exp.logo}
                alt={exp.title}
                className="w-24 h-24 rounded-full border-2 border-pink-200 mb-4"
              />
              <h2 className="text-xl font-bold mb-1">{exp.title}</h2>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
            </div>

            <div className="flex-1 mb-4 relative">
              <ul
                className={`text-gray-700 text-sm leading-relaxed transition-[max-height] overflow-hidden ${
                  expanded ? "max-h-[500px]" : "max-h-24"
                }`}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i} className="mb-2">
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setExpanded((prev) => !prev)}
                className="text-blue-500 text-sm mt-1 underline"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
