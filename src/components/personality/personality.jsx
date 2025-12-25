import React from "react";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import person5 from "../../assets/person5.png";
import person6 from "../../assets/person6.png";
import person7 from "../../assets/person7.png";
import person8 from "../../assets/person8.png";
import person9 from "../../assets/person9.png";
import person10 from "../../assets/person10.png";
import person11 from "../../assets/person11.png";
import  { useState,useEffect,useRef } from "react";






const Personality = () => {
  const movies = [
    { title: "Game of Hero", img: person1, date: "Jun-2025", number: 1, name: "John Doe", role: "Actor" },
    { title: "The First of Us", img: person2, date: "Jun-2025", number: 2, name: "Jane Smith", role: "Actress" },
    { title: "The Cono", img: person3, date: "Jun-2025", number: 3, name: "Michael Lee", role: "Actor" },
    { title: "Girek", img: person4, date: "Jun-2025", number: 4, name: "Emma Stone", role: "Actress" },
    { title: "Rabbit", img: person5, date: "Jun-2025", number: 5, name: "Chris Evans", role: "Actor" },
    { title: "Jumin", img: person6, date: "Jun-2025", number: 6, name: "Scarlett Johansson", role: "Actress" },
    { title: "Hero 7", img: person7, date: "Jun-2025", number: 7, name: "Robert Downey", role: "Actor" },
    { title: "Hero 8", img: person8, date: "Jun-2025", number: 8, name: "Natalie Portman", role: "Actress" },
    { title: "Hero 9", img: person9, date: "Jun-2025", number: 9, name: "Tom Holland", role: "Actor" },
    { title: "Hero 10", img: person10, date: "Jun-2025", number: 10, name: "Gal Gadot", role: "Actress" },
    { title: "Hero 11", img: person11, date: "Jun-2025", number: 11, name: "Chris Hemsworth", role: "Actor" },
  ];
     const visibleSlides = 11;
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % movies.length);
  };


  const visibleMovies = [];
  for (let i = 0; i < visibleSlides; i++) {
    visibleMovies.push(movies[(startIndex + i) % movies.length]);
  }
  return (
         <section className="w-full px-12 py-10 relative">
      <h2 className="mb-6 text-2xl font-semibold text-white">
       Your favourite personality
      </h2>

      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/70"
        >
          &#60;
        </button>

        {/* Slider */}
        <div className="overflow-hidden w-full mt-3">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${0}px)`, // flex ilə görünən elementlər slide olacaq
            }}
          >
            {visibleMovies.map((movie, index) => (
              <div
                key={index}
                className="relative w-30 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl group transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-[180px] object-cover"
                />

           
                <div className="mt-2 text-center text-white">
                  <p className="font-semibold text-sm">{movie.name}</p>
                  <p className="text-xs text-gray-300">{movie.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 text-white text-3xl bg-black/50 p-2 rounded-full hover:bg-black/70"
        >
          &#62;
        </button>
      </div>
    </section>
  );
};

export default Personality;