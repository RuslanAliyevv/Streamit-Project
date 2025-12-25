import React, { useState } from "react";
import gameofhero from "../../assets/gameofhero.png";
import slidervenom from "../../assets/slidervenom.png";
import thecono from "../../assets/thecono.png";
import girek from "../../assets/girek.png";
import rabbit from "../../assets/rabbit.png";

const movies = [
  {
    id: 1,
    title: "Venom",
    img: slidervenom,
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `In a shadowy metropolis where danger lurks in every corner,
     an alien symbiote crash-lands on Earth, searching for the perfect host. Enter Eddie Thorn,
    an investigative journalist whose life...
    `,
   
  },
  {
    id: 2,
    title: "Game Of Hero",
    img: gameofhero,
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `The First of Us – In a post-apocalyptic world, a small group of survivors
    uncovers the origins of humanity’s downfall. As they journey through a dangerous,
    desolate landscape, they realize they may hold the key to rebuilding civilization—or
    ensuring its final extinction.`,
   
  },
  {
    id: 3,
    title: "The Cono",
    img: thecono,
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `The First of Us – In a post-apocalyptic world, a small group of survivors
    uncovers the origins of humanity’s downfall. As they journey through a dangerous,
    desolate landscape, they realize they may hold the key to rebuilding civilization—or
    ensuring its final extinction.`,
  
  },
  {
    id: 4,
    title: "Girek",
    img: girek,
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `The First of Us – In a post-apocalyptic world, a small group of survivors
    uncovers the origins of humanity’s downfall. As they journey through a dangerous,
    desolate landscape, they realize they may hold the key to rebuilding civilization—or
    ensuring its final extinction.`,
  
  },
  {
    id: 5,
    title: "Rabbit",
    img: rabbit,
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `The First of Us – In a post-apocalyptic world, a small group of survivors
    uncovers the origins of humanity’s downfall. As they journey through a dangerous,
    desolate landscape, they realize they may hold the key to rebuilding civilization—or
    ensuring its final extinction.`,
   
  },
];

const ITEM_HEIGHT = 72;

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goUp = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const goDown = () => {
    setActiveIndex((prev) => Math.min(prev + 1, movies.length - 1));
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${movies[activeIndex].img})`,
      }}
    >
      <div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      <div className="relative z-10 flex h-full items-center px-16">
        {/* LEFT SLIDER COLUMN */}
        <div className="flex flex-col items-center">
          {/* UP BUTTON */}
          <button
            onClick={goUp}
            className="mb-3 w-10 h-10 rounded-full bg-black/60 text-white
            hover:bg-yellow-400 hover:text-black transition"
          >
            ^
          </button>

          {/* SLIDER */}
          <div className="relative h-[450px] overflow-hidden">
            <div
              className="flex flex-col gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(-${activeIndex * ITEM_HEIGHT}px)`,
              }}
            >
              {movies.map((movie, index) => (
                <button
                  key={movie.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-70 h-30 rounded-lg overflow-hidden
                    border-2 transition-all duration-300
                    ${
                      activeIndex === index
                        ? "border-yellow-400 scale-105 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }
                  `}
                >
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* DOWN BUTTON */}
          <button
            onClick={goDown}
            className="mt-3 w-10 h-10 rounded-full bg-black/60 text-white
            hover:bg-yellow-400 hover:text-black transition"
          >
            v
          </button>
        </div>

        {/* RIGHT INFO */}
        <div className="ml-20 text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            {movies[activeIndex].title}
          </h1>
          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            {/* Stars */}
            <div className="flex text-yellow-400 text-lg">★★★★★</div>

            {/* imdb + duration */}
            <span className="text-sm text-gray-200">
              {movies[activeIndex].imdb} • {movies[activeIndex].duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-4">
            {movies[activeIndex].description}
          </p>

       

      
    
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
