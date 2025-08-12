export default function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      {/* Intro */}
      <h1 className="text-3xl font-bold mb-1">About</h1>
      <p className="text-lg mb-6">
        B.Tech Graduate — Information Technology from Indira Gandhi Delhi Technical University for Women, New Delhi.
      </p>
      <p className="mb-8">
        Hello, I’m Rubia Khan. I’m passionate about AI/ML, large language models, and full-stack development.
        With hands-on experience at Samsung Research and Development Institute, I have built real-time gesture recognition systems, RAG pipelines, and scalable full-stack applications. 
        I enjoy solving challenging problems, integrating AI into practical solutions, and building impactful products that make a difference.
      </p>

      {/* Education */}
      <h2 className="text-green-600 font-semibold text-xl mb-4">
        Education
      </h2>
      <div className="space-y-6 mb-10">
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-semibold">
                Indira Gandhi Delhi Technical University for Women, New Delhi
              </h3>
              <p>B.Tech — Information Technology</p>
            </div>
            <div className="text-gray-600 text-sm mt-2 md:mt-0 text-right">
              <p>2021 – 2025</p>
              <p>CGPA: 7.57</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-green-600 font-semibold text-xl mb-4">Skills</h2>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <p>
          <span className="font-semibold">Programming Languages:</span> Python, C/C++, JavaScript/TypeScript, SQL, HTML, CSS
        </p>
        <p>
          <span className="font-semibold">Frameworks & Libraries:</span> React.js, Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, REST API
        </p>
        <p>
          <span className="font-semibold">AI/ML:</span> Transformers, BERT, TensorFlow, Keras, PyTorch, NLP, OpenCV, RAG Pipelines
        </p>
        <p>
          <span className="font-semibold">Developer Tools:</span> Git, Docker, Kubernetes, Jenkins, Jira, Slack, Jupyter Notebook, VS Code, PyCharm, Heroku
        </p>
        <p>
          <span className="font-semibold">Database:</span> MySQL, MongoDB, Supabase
        </p>
      </div>
    </div>
  );
}
