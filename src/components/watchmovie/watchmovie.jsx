import React from 'react'
import gameofhero from "../../assets/gameofhero.png";
import watchchose from "../../assets/watchchose.png";
import watchvenom from "../../assets/watchvenom.png";
import watchdinozor from "../../assets/watchdinozor.png";
import watchcrisna from "../../assets/watchcrisna.png";
import rabbit from "../../assets/rabbit.png";
const WatchMovie = () => {
     const movies = [
        { title: "Game of Hero", img: gameofhero, date: "Jun-2025",number:1 },
        { title: "The First of Us", img: watchchose, date: "Jun-2025",number:2 },
        { title: "The Cono", img: watchvenom, date: "Jun-2025",number:3 },
        { title: "Girek", img: watchdinozor, date: "Jun-2025",number:4 },
        { title: "Rabbit", img: rabbit, date: "Jun-2025",number:5 },
        { title: "Jumin", img: watchcrisna, date: "Jun-2025",number:6 },
      ];
  return (
   <>
      <section className="w-full px-12 py-10">
      {/* Title */}
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Top 10 movies to watch
      </h2>

      {/* Movie List */}
      <div className="flex gap-6 mt-4">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative w-1/6 cursor-pointer overflow-hidden rounded-xl group transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-[300px] object-cover"
            />

            {/* Number Overlay */}
            <div className="absolute bottom-0 right-0">
              <p className="
                text-[100px] font-bold text-white
                transition-all duration-500
                group-hover:-translate-y-6 group-hover:text-yellow-400
              ">
                {movie.number}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
   </>
  )
}

export default WatchMovie