import React from "react";
import BigImage from "../../../../public/img/hs-real.png";

const PinnedPost = () => {
  return (
    <div className="bg-primary p-4 md:p-8 w-full min-h-screen flex items-center justify-center relative overflow-visible">
      {/* Card container with a red background and rounded corners */}
      <div
        className="relative w-full max-w-7xl h-[116vh] mx-auto rounded-3xl shadow-2xl z-10 px-8 py-16 lg:py-32 text-black"
        style={{ backgroundColor: "#c2b8bc" }}
      >
        {/* Flex container for the two main columns (text and image) */}
        <div className="flex flex-col lg:flex-row p-8 md:p-12 lg:p-16 gap-8 relative z-10">
          {/* Left text block */}
          <div className="flex flex-col lg:w-2/5 justify-center transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:z-50 card-hover">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-none select-none font-black">
              About
              <br />
              Me <span className="text-[#5a0a0a]">!!</span>
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md">
              Be dedicated in your craft. Build with precision, ship only what you trust. Never betray your code or work against your own growth. Share the values of tech to solve problems for others. Use your skills for things that matter and create with heart.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="/cv-akmal.pdf" download="Akmal-Mahesa-CV.pdf" className="bg-[#5a0a0a] hover:bg-[#4a0808] transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md">
                Download CV
              </a>
              <a href="#projects" className="bg-[#5a0a0a] hover:bg-[#4a0808] transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:z-50 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md">
                View Portofolio
              </a>
            </div>
            <p className="mt-8 text-xs md:text-sm leading-relaxed max-w-md">
              Began my IT path with passion. Didn’t know where it’d lead me. Took it
              further. Built my first website. Learned basic code. Joined team-based
              tasks. And semester by semester, sharpened my focus, not by
              passively watching class but through late nights filled with
              building what I love to learn through practice... real code, real bugs,
              real growth here in semester four.
            </p>
          </div>

          {/* Right side with the main image and floating elements */}
          <div className="relative min-w-[700px] max-w-[700px] lg:w-3/5 flex justify-center items-center z-0">
            {/* Main Image*/}
            <div className="absolute transform -translate-x-[30%] -translate-y-[18%] md:-translate-x-[30%] md:translate-y-[41%] md:w-[90vh] max-w-[700px] md:h-full lg:top-[-25rem] z-0 md:flex md:items-center items-end md:justify-center">
              <img
                src={BigImage}
                alt="Han Soo He"
                className="object-cover h-[500px] rounded-2xl md:h-[100vh] md:w-full lg:h-[140vh] lg:w-full transform transition-transform duration-300 md:z-50"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x800/b31a17/ffffff?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Bottom Right Floating Polaroid */}
            <div className="absolute bottom-5 right-5 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] transform transition-transform duration-300">
              <div style={{ height: '100px', position: 'relative' }}>
                {/* <Carousel
                  baseWidth={300}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                /> */}
              </div>
            </div>

            {/* Top Right Info Box - Increased Size */}
            <div className="absolute top-0 md:right-0 bg-[#5a0a0a] rounded-xl px-5 py-4 max-w-xs md:max-w-sm flex items-start gap-4 shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl">
              <i className="fas fa-user-circle text-white text-3xl mt-1"></i>
              <div>
                <p className="text-white font-bold text-lg leading-tight">
                  hey it's not me
                </p>
                <p className="text-white text-xs leading-snug mt-2">
                  Photo beside is not me! That is a Korean artist I admire. It’s a
                  layout that visually inspires this whole personal site design so I
                  just wanted to use it here.
                </p>
              </div>
            </div>

            {/* Ratings Box below the info box */}
            <button className="btn absolute lg:top-32 md:right-0 bg-[#5a0a0a] rounded-xl px-5 py-3 max-w-xs md:max-w-sm text-center shadow-lg mt-4 text-2xl">
              <i className="transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl ri-instagram-line text-white" onClick={() => window.open('https://www.instagram.com/xeesoxee?igsh=aWdnbDY2YmNpdmFr','_blank')}></i>
              <p className="text-white text-xs uppercase tracking-wider mt-1">
                Account instagram
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnedPost;
