import React from "react";
import foryouApes from "../../assets/foryouApes.png";
import foryouBumble from "../../assets/foryouBumble.png";
import foryouJohnWick from "../../assets/foryouJohnWick.png";
import jumin from "../../assets/jumin.png";
import rabbit from "../../assets/rabbit.png";

const PicksForYou = () => {
  const movies = [
    {
      title: "War of the Planet",
      img: foryouApes,
      date: "Jun-2025",
      genre: "Adventure",
    },
    {
      title: "Transformers",
      img: foryouBumble,
      date: "Jun-2025",
      genre: "Adventure",
    },
    {
      title: "John Wick",
      img: foryouJohnWick,
      date: "Jun-2025",
      genre: "Adventure",
    },
    {
      title: "Jumin",
      img: jumin,
      date: "Jun-2025",
      genre: "Adventure",
    },
    {
      title: "Rabbit",
      img: rabbit,
      date: "Jun-2025",
      genre: "Adventure",
    },
  ];

  return (
    <>
      <section className="w-full px-12 py-10">
        {/* Title */}
        <h2 className="mb-6 text-2xl font-semibold text-white">
         Fresh Picks Just For You
        </h2>

        {/* Movie List */}
        <div className="flex gap-6 mt-4">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="
        relative w-1/5
        rounded-xl overflow-hidden
        cursor-pointer
        group
        transition-all duration-300
        hover:scale-125
      "
            >
              {/* Image */}
              <img
                src={movie.img}
                alt={movie.title}
                className="
          w-full aspect-[15/9] object-cover 
          transition-transform duration-500
          group-hover:-translate-y-4
        "
              />
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
              </div>
             
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PicksForYou;
