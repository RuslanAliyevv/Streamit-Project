import React, { useState } from "react";
import fastfurio from "../../assets/fastfurio.png";
import bnslider1 from "../../assets/bnslider1.png";
import thecono from "../../assets/thecono.png";
import girek from "../../assets/girek.png";
import rabbit from "../../assets/rabbit.png";

import slidervenom from "../../assets/slidervenom.png";

const movies = [
  {
    id: 1,
    title: "Fast & Furious",
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description:
      "Fast & Furious follows the lives of street racers, heist experts and law enforcement officers.",
    tags: ["Family", "Hitman"],
    genres: ["Action", "Adventure"],
    starring: "Vin Diesel",
    bg: fastfurio,
    thumb: bnslider1,
  },
  {
    id: 2,
    title: "The First of Us",
    imdb: "IMDB 8.7",
    duration: "1h 55m",
    description:
      "In a post-apocalyptic world, survivors fight to stay alive while uncovering humanity’s downfall.",
    tags: ["Drama"],
    genres: ["Action", "Sci-Fi"],
    starring: "Jordan Gratt",
    bg: thecono,
    thumb: thecono,
  },
  {
    id: 3,
    title: "Game of Hero",
    imdb: "IMDB 8.4",
    duration: "2h 20m",
    description: "A hero rises against impossible odds to save a broken world.",
    tags: ["Epic"],
    genres: ["Fantasy", "Action"],
    starring: "Chris Nolan",
    bg: girek,
    thumb: girek,
  },

  {
    id: 4,
    title: "Game of Hero",
    imdb: "IMDB 8.4",
    duration: "2h 20m",
    description: "A hero rises against impossible odds to save a broken world.",
    tags: ["Epic"],
    genres: ["Fantasy", "Action"],
    starring: "Chris Nolan",
    bg: rabbit,
    thumb: rabbit,
  },
  {
    id: 4,
    title: "Game of Hero",
    imdb: "IMDB 8.4",
    duration: "2h 20m",
    description: "A hero rises against impossible odds to save a broken world.",
    tags: ["Epic"],
    genres: ["Fantasy", "Action"],
    starring: "Chris Nolan",
    bg: slidervenom,
    thumb: slidervenom,
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);
  const movie = movies[active];

  const prevSlide = () => {
    setActive(active === 0 ? movies.length - 1 : active - 1);
  };

  const nextSlide = () => {
    setActive(active === movies.length - 1 ? 0 : active + 1);
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${movie.bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-16 text-white">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="mb-4 text-6xl font-bold tracking-wider">
            {movie.title}
          </h1>

          <div className="mb-4 flex items-center gap-4 text-yellow-400">
            <span className="text-lg">★★★★★</span>
            <span className="text-sm text-gray-200">
              {movie.imdb} • {movie.duration}
            </span>
          </div>

          <p className="mb-5 leading-relaxed text-gray-200">
            {movie.description}
          </p>

          <p className="mb-1">
            <span className="font-semibold text-red-500">Tags:</span>{" "}
            {movie.tags.join(", ")}
          </p>

          <p className="mb-1">
            <span className="font-semibold text-red-500">Genres:</span>{" "}
            {movie.genres.join(" / ")}
          </p>

          <p>
            <span className="font-semibold text-red-500">Starring:</span>{" "}
            {movie.starring}
          </p>
        </div>

        {/* RIGHT */}
        <div className="absolute right-0 top-1/2 h-[500px] -translate-y-1/2 flex items-center overflow-hidden bg-gray-950">
          {/* Box Container */}
          <div className="flex transition-transform duration-500 rounded-l-3xl ml-4">
            {/* MAIN IMAGE */}
            <div className="relative h-[55vh] w-[300px] shrink-0 overflow-hidden rounded-2xl mb-5">
              <img
                src={movie.thumb}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              {/* ALT OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-black/40 p-2 text-white">
                <p className="text-[18px] font-semibold">{movie.title}</p>
                <p className="text-[14px] text-gray-300">{movie.duration}</p>
              </div>
            </div>

            {/* PEEK IMAGE (NEXT) */}
            <div className="relative h-[55vh] w-[200px] ml-3 shrink-0 overflow-hidden rounded-2xl bg-black/40 opacity-70">
              <img
                src={movies[(active + 1) % movies.length].thumb}
                alt="next"
                className="h-full w-full object-cover"
              />
              {/* ALT OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-white">
                <p className="text-[18px] font-semibold">
                  {movies[(active + 1) % movies.length].title}
                </p>
                <p className="text-[14px] text-gray-300">
                  {movies[(active + 1) % movies.length].duration}
                </p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
            <button
              onClick={prevSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
