import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;
  const autoScrollInterval = 10000000000; // 5 seconds

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore some of my recent work and creative projects
          </p>
        </div>

        <div className="relative">
          <div className="carousel-container overflow-hidden rounded-2xl">
            <div
              className="carousel-track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Project 1 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                        Landing Page
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        RDR2 Landing Page
                      </h3>
                      <p className="wh-text mb-6">
                        A stunning landing page for a creative agency with
                        smooth animations, interactive elements, and modern
                        design principles.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <div className="badge badge-primary">React</div>
                        <div className="badge badge-info">CSS</div>
                        <div className="badge badge-warning">Javascript</div>
                        <div className="badge badge-info text-white">Tailwind</div>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/RDR2LandingPage/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          <a href="https://github.com/alientttt/RDR2LandingPage" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../public/img/rdr2.png"
                      alt="Creative Agency Website"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                        Web App
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        E-Commerce Love Letter
                      </h3>
                      <p className="mb-6">
                        A stunning landing page for a creative agency with
                        smooth animations, interactive elements, and modern
                        design principles.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <div className="badge badge-neutral">Next JS</div>
                        <div className="badge badge-primary">CSS</div>
                        <div className="badge badge-warning">Javascript</div>
                        <div className="badge badge-primary">GSAP</div>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/RDR2LandingPage/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../public/img/love-letter.png"
                      alt="Creative Agency Website"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4">
                        Mobile App
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        Clone Go-Food App
                      </h3>
                      <p className="mb-6">
                        A mobile-first web application inspired by GoFood’s UI, built with JavaScript, focusing on responsive design, smooth animations, and user-friendly interactions.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <div className="badge badge-primary">Flutter</div>
                        <div className="badge badge-info">CSS</div>
                        <div className="badge badge-warning">Javascript</div>
                        <div className="badge badge-info text-white">Tailwind</div>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/AppCloneGoFood/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../../public/img/mobile.png"
                      alt="Task Management App"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
                        Landing Page
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        Landing Page F1
                      </h3>
                      <p className="mb-6">
                        A dynamic landing page showcasing F1 information and driver profiles, featuring animated card transitions and an engaging user experience.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Flutter
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Javascript
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          CSS3
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Tailwind
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/F1Website/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          <a href="https://github.com/alientttt/F1Website" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../public/img/f1.png"
                      alt="Task Management App"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project 5 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                        Web App
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        Calculator App
                      </h3>
                      <p className="mb-6">
                        A JavaScript-based numerical method calculator developed for academic purposes, designed to assist with solving engineering and mathematics problems interactively.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <div className="badge badge-primary">React</div>
                        <div className="badge badge-info">CSS</div>
                        <div className="badge badge-warning">Javascript</div>
                        <div className="badge badge-info text-white">Tailwind</div>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/KalkulatorGaussJordanV2/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          <a href="https://github.com/alientttt/KalkulatorGaussJordanV2" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../public/img/kalkulator.png"
                      alt="Task Management App"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project 6 */}
              <div className="carousel-slide min-w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="project-card p-8 rounded-2xl">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                        Web App
                      </span>
                      <h3 className="text-3xl font-bold mb-4">
                        System Reservation Hotel
                      </h3>
                      <p className="mb-6">
                        A simple hotel reservation system with integrated payment features, built using JavaScript to streamline booking and transaction processes.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <div className="badge badge-primary">React</div>
                        <div className="badge badge-info">CSS</div>
                        <div className="badge badge-warning">Javascript</div>
                        <div className="badge badge-info text-white">Tailwind</div>
                      </div>
                      <div className="flex gap-4">
                        <button className="btn gradient-bg text-white border-none">
                          <i className="ri-external-link-line mr-2"></i>
                          <a href="https://alientttt.github.io/SistemHotelUser/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </button>
                        <button className="btn btn-outline">
                          <i className="ri-github-line mr-2"></i>
                          <a href="https://github.com/alientttt/SistemHotelUser" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src="../../../../public/img/reservasihotel.png"
                      alt="Task Management App"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="btn btn-circle btn-outline hover:gradient-bg hover:text-white hover:border-transparent"
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle btn-outline hover:gradient-bg hover:text-white hover:border-transparent"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`carousel-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-black' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;