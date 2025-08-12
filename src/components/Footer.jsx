import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="mailto:rubiakhan248@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={24} className="cursor-pointer" />
              </a>
              <a
                href="http://linkedin.com/in/rubia-khan-a43495340"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} className="cursor-pointer" />
              </a>
              <a
                href="https://github.com/rubiakhan02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="cursor-pointer" />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Rubia Khan. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ rubia</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
