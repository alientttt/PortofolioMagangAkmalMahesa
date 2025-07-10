import React, { useState, useEffect } from "react";
const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const viewportHeight = window.innerHeight;
        if (currentScrollY >= aboutTop - viewportHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-white/80 shadow-2xl red-dark"
    >
      <div className="container mx-auto px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl">
          {/* Left */}
          <div className={`glow-effect space-y-6 p-2 bg-transparent shadow-2xl rounded-3xl transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h3 className="text-2xl font-bold text-black mb-4">Background</h3>
            <p className="leading-relaxed">
              A passionate tech enthusiast with a love for creating innovative solutions and exploring the world of informatics.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Learning Full Stack Development</li>
              <li>• Exploring UI/UX Design Basics</li>
              <li>• Passionate About Backend Logic</li>
            </ul>
          </div>

          {/* Center */}
          <div className="bg-primary w-96 h-96 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FDE8E3] to-[#3A2B32] glow-effect"><i className="text-9xl text-white ri-brain-line animate-pulse"></i></div>

          {/* Right */}
          <div className={`glow-effect space-y-6 p-2 bg-transparent shadow-2xl rounded-3xl ml-4 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-2xl font-bold text-black mb-4">
              Skills & Passion
            </h3>
            <p className="leading-relaxed">
              I'm actively exploring Front-end, Back-end, and UI/UX design to build well-rounded digital solutions — with a stronger passion and focus on Back-end development.
            </p>
            <ul className="text-sm space-y-2">
              <li>• Front-end (React, Tailwind)</li>
              <li>• Back-end (Node.js, Express)</li>
              <li>• UI/UX (Figma, Design Thinking)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
