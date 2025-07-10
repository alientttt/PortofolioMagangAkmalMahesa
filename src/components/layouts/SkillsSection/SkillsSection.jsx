import { SiPython, SiPhp, SiMysql, SiFramer, SiFlask, SiExpress  } from "react-icons/si";
const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 wh-text">
            My Expertise
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Tools I've explored and mastered to grow as a fullstack developer.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-html5-fill text-2xl text-orange-500"></i>
            </div>
            <h3 className="font-semibold text-gray-800">HTML</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-css3-fill text-2xl text-blue-500"></i>
            </div>
            <h3 className="font-semibold text-gray-800">CSS3</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SiPython className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-800">Python</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-javascript-fill text-2xl text-yellow-500"></i>
            </div>
            <h3 className="font-semibold text-gray-800">JavaScript</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-reactjs-line text-2xl text-cyan-500"></i>
            </div>
            <h3 className="font-semibold text-gray-800">React</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-nextjs-line text-2xl text-white"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Next JS</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <SiFlask className="text-white w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-800">Flask</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <SiExpress className="text-white w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-800">Express JS</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-nodejs-line text-2xl text-green-500"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Node.js</h3>
          </div>
          <div className="card-hover bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-database-2-line text-2xl text-purple-500"></i>
              <SiMysql className="text-purple-500 w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-800">Database</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
