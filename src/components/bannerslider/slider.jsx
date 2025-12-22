import React from 'react'
import "./slider.css"


const Slider = () => {
   const movie = {
    title: "Fast & Furious",
    imdb: "IMDB 8.2",
    duration: "2h 59m",
    description: `The First of Us – In a post-apocalyptic world, a small group of survivors
    uncovers the origins of humanity’s downfall. As they journey through a dangerous,
    desolate landscape, they realize they may hold the key to rebuilding civilization—or
    ensuring its final extinction.`,
    tags: ["Family", "Hitman"],
    genres: ["Action", "Adventure"],
    starring: "Jordan Gratt",
  };
  return (
    <>
     <section className="banSlider flex items-center">
      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl px-12 text-white">
        
        {/* Title */}
        <div className=" text-6xl tracking-widest  font-bold mb-4">
          {movie.title}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          {/* Stars */}
          <div className="flex text-yellow-400 text-lg">
            ★★★★★
          </div>

          {/* imdb + duration */}
          <span className="text-sm text-gray-200">
            {movie.imdb} • {movie.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-200 leading-relaxed mb-4">
          {movie.description}
        </p>

        {/* Tags */}
        <p className="mb-3">
          <span className="font-semibold text-red-600">Tags:</span>{" "}
          <span className="text-gray-300 ">
            {movie.tags.join(", ")}
          </span>
        </p>

        {/* Genres */}
        <p className="mb-1">
          <span className="font-semibold text-red-600">Genres:</span>{" "}
          <span className="text-gray-300">
            {movie.genres.join(" / ")}
          </span>
        </p>

        {/* Starring */}
        <p>
          <span className="font-semibold text-red-600">Starring:</span>{" "}
          <span className="text-gray-300">
            {movie.starring}
          </span>
        </p>

      </div>
    </section>
    </>
  )
}

export default Slider