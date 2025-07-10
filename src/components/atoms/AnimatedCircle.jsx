import { useEffect, useRef, useState } from "react";

const AnimatedCircle = ({ inAbout }) => {
  const circleRef = useRef();

  return (
    <div
      ref={circleRef}
      className={`transition-all duration-[2000ms] ease-in-out
        fixed z-40
        ${
          inAbout
            ? "top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[300px] h-[300px]"
            : "bottom-0 left-1/2 translate-x-[-50%] w-[200px] h-[100px]"
        }
        bg-primary rounded-full flex items-center justify-center overflow-hidden shadow-2xl`}
    >
      <img
        src={inAbout ? "/img/about-img.png" : "/img/hsh.png"}
        alt="circle-img"
        className={`transition-all duration-1000 object-cover w-full h-full ${
          inAbout ? "opacity-100" : "opacity-80"
        }`}
      />
    </div>
  );
};

export default AnimatedCircle;
