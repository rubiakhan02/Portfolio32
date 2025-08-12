import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import nodejs from "../../public/node.png";
import reactjs from "../../public/reactjs.png";

export default function PortFolio() {
  const [expanded, setExpanded] = useState({});

  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "Community Impact Platform",
      description:
        "Full-stack volunteer and event management system for Robinhood Army. Real-time ops with 1,000+ data points and 100+ active volunteers. Added generative AI for tailored educational resources, cutting manual prep by ~70%. Automated scheduling and workflows across Delhi with pilot of 100+ users driving iterative improvements.",
      link: "https://robinhood-army.vercel.app/",
    },
    {
      id: 2,
      logo: nodejs,
      name: "Movie Recommendation System",
      description:
        "Personalized recommendations using collaborative and content-based filtering. Processed TMDB-5000 with Pandas/NumPy for feature extraction and similarity. A/B tested and tuned hyperparameters, reducing incorrect recs by ~15%. Streamlit UI with TMDB API for dynamic posters.",
      link: "https://github.com/rubiakhan02",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-6">
        {cardItem.map(({ id, logo, name, description, link }) => (
          <div
            key={id}
            className="
              flex flex-col justify-between
              bg-pink-50 border border-pink-200 rounded-lg shadow-lg
              p-6 h-full
              transition-transform hover:scale-105
            "
          >
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 rounded-full border-2 border-pink-200 mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{name}</h2>
            </div>

            <div className="flex-1 mb-4 relative">
              <p
                className={`text-gray-700 text-sm leading-relaxed transition-[max-height] overflow-hidden ${
                  expanded[id] ? "max-h-[200px]" : "max-h-20"
                }`}
              >
                {description}
              </p>
              <button
                onClick={() =>
                  setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
                }
                className="text-blue-500 text-sm mt-1 underline"
              >
                {expanded[id] ? "Read less" : "Read more"}
              </button>
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-full inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105">
                <FaGithub className="mr-2 text-lg" />
                Source Code
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
