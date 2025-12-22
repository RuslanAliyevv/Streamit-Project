import React from "react";
import gameofhero from "../../assets/gameofhero.png";
import thefirstofus from "../../assets/thefirstofus.png";
import thecono from "../../assets/thecono.png";
import girek from "../../assets/girek.png";
import rabbit from "../../assets/rabbit.png";
import jumin from "../../assets/jumin.png";

const Resume = () => {
  const movies = [
    { title: "Game of Hero", img: gameofhero, date: "Jun-2025" },
    { title: "The First of Us", img: thefirstofus, date: "Jun-2025" },
    { title: "The Cono", img: thecono, date: "Jun-2025" },
    { title: "Girek", img: girek, date: "Jun-2025" },
    { title: "Rabbit", img: rabbit, date: "Jun-2025" },
    { title: "Jumin", img: jumin, date: "Jun-2025" },
  ];
  return (
    <>
      <section className="w-full px-12 py-10">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Continue Watch Movies
        </h2>

        {/* Movie List */}
        <div className="flex gap-6 mt-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative w-1/6 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={movie.img}
                alt={movie.title}
                 className="w-full aspect-[15/9] object-cover"
              />

              {/* Overlay title */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-1 py-0">
                <p className="text-[16px] font-semibold text-white truncate">
                  {movie.title}
                 <span> : </span>
                  {movie.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Resume;
