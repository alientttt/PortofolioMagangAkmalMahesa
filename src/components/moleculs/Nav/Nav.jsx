import React, { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white-purple backdrop-blur-md shadow-sm rounded-full border border-gray-600 flex justify-around items-center gap-6 p-3 w-[80%] max-w-[1456px] min-w-[500px] h-[66px] z-50 fade-in">
      <a href="#home" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">Home</a>
      <a href="#about" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">About</a>
      <a href="#services" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">Services</a>
      <button className="btn btn-red-dark rounded-full text-[34px] w-[56px] h-[54px] text-white border-none hover:shadow-xl transition-all duration-300 hidden md:block">
        A
      </button>
      <a href="#projects" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">Projects</a>
      <a href="#skills" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">Skills</a>
      <a href="#contact" className="p-2 font-medium text-velvet hidden hover:rounded-4xl md:block hover:bg-white/10 hover:scale-105 hover:text-white transition-all duration-300 ease-in-out">Contact</a>
      <button className="md:hidden absolute left-4 text-2xl text-amber-950" onClick={() => setOpen(!open)}>
          <i className="ri-menu-line"></i>
      </button>
    </nav>
    <div className={`text-gray-600 fixed top-4 left-4 w-16 h-auto rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-600 flex flex-col items-center p-2 gap-4 z-50 transition-all duration-300 ${
          open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:hidden`}
      >
        <a href="#home" className="text-xl">
          <i className="ri-home-line"></i>
        </a>
        <a href="#about" className="text-xl">
          <i className="ri-user-line"></i>
        </a>
        <a href="#projects" className="text-xl">
          <i className="ri-code-line"></i>
        </a>
        <a href="#contact" className="text-xl">
          <i className="ri-mail-line"></i>
        </a>
        <button className="text-gray-600 rounded-e-full border-none hover:bg-gray-500 hover:shadow-xl transition-all duration-300 text-xl " onClick={() => setOpen(!open)}>
          <i className="ri-close-line"></i>
        </button>
      </div>
      </>
  );
};

export default Nav;
