import React from "react";
import recomend1 from "../../assets/recomend1.png";
import recomend2 from "../../assets/recomend2.png";
import recomend3 from "../../assets/recomend3.png";
import recomend4 from "../../assets/recomend4.png";
import recomend5 from "../../assets/recomend5.png";
import recomend6 from "../../assets/recomend6.png";
const Recommended = () => {
  const movies = [
    {
      title: "The Pirates",
      img: recomend1,
      date: "Jun-2025",
      number: 1,
      genre: "Action",
      language: "English",
    },
    {
      title: "The Hunter",
      img: recomend2,
      date: "Jun-2025",
      number: 2,
      genre: "Drama",
      language: "English",
    },
    {
      title: "Lost in Space",
      img: recomend3,
      date: "Jun-2025",
      number: 3,
      genre: "Fantasy",
      language: "English",
    },
    {
      title: "Castle Rock",
      img: recomend4,
      date: "Jun-2025",
      number: 4,
      genre: "Adventure",
      language: "English",
    },
    {
      title: "Breaking Bad",
      img: recomend5,
      date: "Jun-2025",
      number: 5,
      genre: "Comedy",
      language: "English",
    },
    {
      title: "Assasins Creed",
      img: recomend6,
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
        Recommended for you
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

export default Recommended;
