import React, { useState,useEffect } from "react";
import seasonbgimage1 from "../../assets/seasonbgimage1.png";
import seasonbgimage2 from "../../assets/seasonbgimage2.png";
import seasonbgimage3 from "../../assets/seasonbgimage3.png";

const SeasonSlider = () => {
  const slides = [
    {
      title: "Lost In Space",
      desc: " Lost in Space is a sci-fi adventure series that follows the Robinson family, who are selected to join a space colony mission. However, when their spacecraft veers off course, they become stranded onan unknown planet. As they struggle",
      date: "Release: Jun 2025",
      bg: seasonbgimage2,
    },
    {
      title: "The Hunter",
      desc: "In the enthralling television series The Hunter, the city stands as a kingdom inturmoil, where dragons of corruption and power wage silent wars in the shadows. Ourrelentless detective, a self-proclaimed king of justice, navigates",
      date: "Release: Aug 2025",
      bg: seasonbgimage1,
    },
    {
      title: "The Pirates",
      desc: " Pirates of Day One is an original, epic series that reimagines the classic pirate genre by blending adventure, fantasy, and historical drama. Set in an alternative 17th-century world where mythical creatures,ancient magic, and powerful ",
      date: "Release: Sep 2025",
      bg: seasonbgimage3,
    },
 
  ];

const [index, setIndex] = useState(0);

const next = () => setIndex((i) => (i + 1) % slides.length);
const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${slides[index].bg})`,backgroundPosition:"center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10  h-full flex items-center px-16">
        {/* LEFT CONTENT */}
        <div className="max-w-xl  text-white">
          <h1 style={{fontSize:"70px"}} className=" font-bold mb-4 tracking-wide">
            {slides[index].title}
          </h1>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {slides[index].desc}
          </p>

          <p className="mb-6 text-[18px] text-gray-200">
            {slides[index].date}
          </p>

          <button style={{borderRadius:"10px"}} className="bg-red-600 hover:bg-red-700 transition px-8 py-2 border-transparent border-2 rounded-2xl font-semibold mt-4">
            Stream Now
          </button>

          {/* SLIDER CONTROLS */}
          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={prev}
              className="w-7 h-7 rounded-4xl border border-white/40
                         hover:bg-white/20 transition text-xl"
            >
              ‹
            </button>

         

            <button
              onClick={next}
              className="w-7 h-7 rounded-full border border-white/40
                         hover:bg-white/20 transition text-xl"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonSlider;