import { SiFramer } from "react-icons/si";
const ServicesSection = () => {
  return (
    <section id="services" className="py-20 red-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-typo">
            What I Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional web development services tailored to your business
            needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {/* <!-- Service 1 --> */}
          <div className="card-hover bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col items-center gap-6">
              <div className="md:w-16 w-full h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-layout-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Website Development
                </h3>
                <img
                  src="/img/web-dev.avif"
                  alt="service-img"
                  className="rounded-2xl"
                />
                <ul className="space-y-4 mb-6 mt-4">
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Creative Layout & Clean Design
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Fully Responsive on All Devices
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Performance Optimization Basics
                  </li>
                </ul>
                <button
                  className="btn gradient-bg text-white border-none hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Learn More
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-middle"
                >
                  <div className="modal-box text-white">
                    <h3 className="font-bold text-xl">Coding Toolkit</h3>
                    <div className="flex gap-4">
                      <i className="ri-nextjs-fill text-lg text-amber-400">
                        Next JS
                      </i>
                      <i className="ri-nodejs-fill text-lg text-green-500">
                        Node JS
                      </i>
                      <i className="ri-tailwind-css-fill text-lg text-sky-400">
                        Tailwind
                      </i>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>

          {/* <!-- Service 2 --> */}
          <div className="card-hover bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col items-center gap-6">
              <div className="md:w-16 w-full h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-smartphone-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Mobile-First Development
                </h3>
                <img
                  src="/img/mobile-dev.avif"
                  alt="service-img"
                  className="rounded-2xl"
                />
                <ul className="space-y-4 mb-6 mt-4">
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Creative Layout & Clean Design
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Fully Responsive on All Devices
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Performance Optimization Basics
                  </li>
                </ul>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn gradient-bg text-white border-none hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Learn More
                </button>
                <dialog
                  id="my_modal_4"
                  className="modal modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-xl text-white">
                      Coding Toolkit
                    </h3>
                    <div className="flex gap-4">
                      <i className="ri-flutter-fill text-lg text-cyan-400">
                        Flutter
                      </i>
                      <i className="ri-javascript-fill text-lg text-amber-400">
                        Javascript
                      </i>
                      <i className="ri-nodejs-fill text-lg text-green-500">
                        Node JS
                      </i>
                      <i className="ri-tailwind-css-fill text-lg text-sky-400">
                        Tailwind
                      </i>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>

          {/* <!-- Service 3 --> */}
          <div className="card-hover bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col items-center gap-6">
              <div className="md:w-16 w-full h-16 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="ri-drag-drop-line text-2xl text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  UI/UX Design
                </h3>
                <img
                  src="/img/figma-dev.avif"
                  alt="service-img"
                  className="rounded-2xl"
                />
                <ul className="space-y-4 mb-6 mt-4">
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Creative Layout & Clean Design
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Fully Responsive on All Devices
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <i className="ri-check-line text-green-500"></i>
                    Performance Optimization Basics
                  </li>
                </ul>
                <button
                  className="btn gradient-bg text-white border-none hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Learn More
                </button>
                <dialog
                  id="my_modal_3"
                  className="modal modal-middle"
                >
                  <div className="modal-box text-white">
                    <h3 className="font-bold text-xl">Coding Toolkit</h3>
                    <div className="flex gap-4 justify-start items-center">
                      <i className="ri-figma-fill text-lg text-pink-400">
                        Figma
                      </i>
                      <i className="h-auto w-auto rounded-full bg-gradient-to-l from-cyan-500 to-blue-500 text-lg text-white p-1">
                        Canva
                      </i>
                      <SiFramer
                        title="Framer"
                        className="bg-slate-500 rounded-full w-8 h-8 p-2 text-lg text-white"
                      />
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
