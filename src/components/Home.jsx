import pic from "../../public/sup32a.jpg";

import { FaEnvelope, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome To My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I’m Rubia Khan, a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Programmer", "Developer", "AI Enthusiast"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              B.Tech Information Technology student at Indira Gandhi Delhi Technical University for Women with
              hands-on experience in software development, AI/ML, and full-stack web technologies. Skilled in Python, JavaScript, React.js, Node.js, and AI-driven applications, with strong problem-solving ability demonstrated by solving 450+ DSA problems. Passionate about building scalable solutions, integrating AI, and delivering impactful projects that solve real-world challenges.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Contact</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="mailto:rubiakhan248@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEnvelope className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/in/rubia-khan-a43495340"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/rubiakhan02"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Rubia Khan"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
