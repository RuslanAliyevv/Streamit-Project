import React from "react";
import deadpool from "../../assets/deadpool.png";
import dragon from "../../assets/dragon.png";
import gameofhero from "../../assets/gameofhero.png";
import avengers from "../../assets/avengers.png";
import thefirstofus from "../../assets/thefirstofus.png";
import rabbit from "../../assets/rabbit.png";
const OnlyStream = () => {
  const movies = [
    {
      title: "DeadPool",
      img: deadpool,
      date: "Jun-2025",
      number: 1,
      genre: "Action",
      language: "English",
    },
    {
      title: "The First of Us",
      img: thefirstofus,
      date: "Jun-2025",
      number: 2,
      genre: "Drama",
      language: "English",
    },
    {
      title: "The Hunter",
      img: dragon,
      date: "Jun-2025",
      number: 3,
      genre: "Fantasy",
      language: "English",
    },
    {
      title: "Game of Hero",
      img: gameofhero,
      date: "Jun-2025",
      number: 4,
      genre: "Adventure",
      language: "English",
    },
    {
      title: "Rabbit",
      img: rabbit,
      date: "Jun-2025",
      number: 5,
      genre: "Comedy",
      language: "English",
    },
    {
      title: "Avengers",
      img: avengers,
      date: "Jun-2025",
      number: 6,
      genre: "Action",
      language: "English",
    },
  ];
  return (
    <>
      <section className="w-full px-12 py-10">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Only on Streamit
        </h2>

        {/* Movie List */}
        <div className="flex gap-6 mt-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="
             relative w-1/6 rounded-xl overflow-hidden
             bg-zinc-900
             cursor-pointer
              group
              transition-all duration-300
             hover:scale-105"
          
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="
            w-full h-[300px] object-cover
            transition-transform duration-500
            group-hover:-translate-y-10
          "
                />
              </div>

              {/* Hover Content (Card bottom) */}
              <div
                className="
          absolute bottom-0 left-0 w-full
          bg-gradient-to-t from-black via-black/90 to-transparent
          p-4
          translate-y-full
          group-hover:translate-y-0
          transition-all duration-500
        "
              >
                <h4 className="text-white font-semibold text-sm">
                  {movie.title}
                </h4>
                <p className="text-yellow-400 text-xs mt-1">{movie.genre}</p>
                <p className="text-gray-400 text-xs">{movie.language}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OnlyStream;
