import React from "react";
// import logo from "../../assets/logo.png";
import logo from "../../assets/logo.png";


// import appStore from "../../assets/appstore.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-12 pt-16">
      {/* TOP PART */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12">
        {/* 1️⃣ LOGO + CONTACT */}
        <div>
          <img src={logo} alt="Streamit" className="w-36 mb-4" />

          <p className="text-[16px] mb-2">
            <span className="text-white text-[18px] font-semibold">Email us:</span>{" "}
            customer@streamit.com
          </p>

          <p className="text-[25px]">
            <span className="text-white font-semibold text-[16px]">Helpline Number:</span>
            <br />
            +(480) 555-0103
          </p>
        </div>

        {/* 2️⃣ MOVIES TO WATCH */}
        <div>
          <h4 className="text-white font-semibold mb-4">Movies to Watch</h4>
          <ul className="space-y-2 text-left text-sm">
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Action</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Adventure</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Animation</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Comedy</li>
          </ul>
        </div>

        {/* 3️⃣ TOP TRENDING */}
        <div>
          <h4 className="text-white font-semibold mb-4">Top Trending</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Top IMDb</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">New Releases</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Popular Shows</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Top Rated</li>
          </ul>
        </div>

        {/* 4️⃣ RECOMMENDED / POPULAR */}
        <div>
          <h4 className="text-white font-semibold mb-4">Recommended</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Popular</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Latest</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Trending</li>
            <li className="hover:text-red-500 cursor-pointer text-[18px]">Watch Again</li>
          </ul>
        </div>

        {/* 5️⃣ SUBSCRIBE */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Subscribe Newsletter
          </h4>

          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 bg-gray-800 text-sm outline-none"
            />
            <button className="bg-red-600 px-4 text-sm font-semibold hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
              <FaInstagram />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
              <FaTwitter />
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>

      {/* UNDERLINE */}
      <div className="border-t border-gray-800 pt-6 pb-8 flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
        {/* LEFT TEXT */}
        <p className="max-w-4xl leading-relaxed">
          © 2025 <span className="text-white font-semibold">STREAMIT</span>. All
          Rights Reserved. All videos and shows on this platform are trademarks
          of, and all related images and content are the property of, Streamit
          Inc. Duplication and copy of this is strictly prohibited.
        </p>

        {/* RIGHT DOWNLOAD */}
        <div>
          <p className="text-white font-semibold mb-3">Download Streamit</p>
          <div className="flex gap-3">
            {/* <img
              src={googlePlay}
              alt="Google Play"
              className="h-10 cursor-pointer"
            />
            <img
              src={appStore}
              alt="App Store"
              className="h-10 cursor-pointer"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;