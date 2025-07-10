import React, { useState, useEffect } from "react";
const HeroSection = () => {
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

  const getAnimationProgress = () => {
    const homeHeight = window.innerHeight;
    const progress = Math.min(scrollY / homeHeight, 1);
    return progress;
  };

  const progress = getAnimationProgress();

  const circleY = 70 + 70 * progress; // dari 70% → 140% (turun)
  const imageY = 30 + 70 * progress; // dari 30% → 100% (turun)

  const circleStyles = {
    width: "846px",
    height: "758px",
    transform: `translateX(-50%) translateY(${circleY}%)`,
    transition: "transform 0.7s ease-in-out",
    borderRadius: "50%",
    left: "50%",
    position: "absolute",
    // zIndex diubah agar berada di atas konten about
    zIndex: 5,
  };

  const imageStyles = {
    transform: `translateX(-50%) translateY(${imageY}%)`,
    transition: "transform 0.7s ease-in-out",
    objectFit: "cover",
    position: "absolute",
    left: "50%",
    // zIndex diubah agar berada di atas lingkaran dan konten about 
    zIndex: 10,
  };
  return (
    <main
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden red-velvet"
    >
      {/* <!-- Floating Elements --> */}
      <div style={circleStyles} className="bg-primary"></div>
        <img
          src="./img/hsh.png"
          alt="Profile"
          style={imageStyles}
          className="z-[-9999]"
        />
      <button className="absolute text-[15px] -translate-y-[750%] text-black flex items-center justify-center bg-transparent border rounded-full w-[72px] h-[35px] p-[8.7px]">
        Hello!
      </button>

      <div className="flex flex-col items-center text-center text-typo z-10">
        <h2 className="absolute text-3xl md:text-6xl font-reguler mb-6 slide-in-left -translate-y-[240%]">
          I'm Akmal
        </h2>
        <h1 className="text-xl md:text-[96px] mx-auto font-semibold tracking-widest -translate-y-[60%] slide-in-right z-[-9999]">
          Tech Enthusiast
        </h1>
      </div>
    </main>
  );
};

export default HeroSection;
