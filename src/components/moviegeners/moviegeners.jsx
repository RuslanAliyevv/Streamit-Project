import React from "react";
import moviegenres1 from "../../assets/moviegenres1.png";
import moviegenres2 from "../../assets/moviegenres2.png";
import moviegenres3 from "../../assets/moviegenres3.png";
import moviegenres4 from "../../assets/moviegenres4.png";
import moviegenres5 from "../../assets/moviegenres5.png";
import jumin from "../../assets/jumin.png";

const MovieGeners = () => {
  const movies = [
    { title: "War of the Planet", img: moviegenres1, genre: "Adventure" },
    { title: "Transformers", img: moviegenres2, genre: "Action" },
    { title: "John Wick", img: moviegenres3, genre: "Thriller" },
    { title: "Jumin", img: moviegenres4, genre: "Drama" },
    { title: "Rabbit", img: moviegenres5, genre: "Family" },
    { title: "Jumin", img: jumin, genre: "Adventure" },
  ];

  return (
    <section className="w-full px-12 py-10">
      <h2 className="mb-6 text-2xl font-semibold text-white">Movie genres</h2>

      <div className="flex gap-6 mt-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative w-1/5 rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <img
              src={movie.img}
              alt={movie.title}
              className="
      w-full aspect-[15/9] object-cover
      transition-transform duration-500
      group-hover:scale-105
    "
            />

            {/* Default overlay */}
            <div
              className="
      absolute inset-0
      bg-black/40
      group-hover:bg-black/80
      transition-all duration-500
      z-10
    "
            />

            {/* Genre (always visible) */}
            <div
              className="
      absolute inset-0
      flex items-center justify-center
      z-20
    "
            >
              <span className="text-white text-xl font-semibold tracking-widest">
                {movie.genre}
              </span>
            </div>

            {/* Red bottom bar (hover) */}
            <div
              className="
      absolute bottom-0 left-0 w-full h-2
      bg-red-600
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-500
      z-30
    "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieGeners;
