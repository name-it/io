import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import {
  AddAPhotoRounded,
  AddCardRounded,
  CancelRounded,
  WallpaperRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className="bg-stone-200 text-stone-700 p-4 flex justify-between font-serif">
      <div className="flex justify-start gap-4 place-items-center">
        <img
          src={logo}
          alt="Name It"
          className="w-16 border border-stone-900"
        />
        <Link to="/" className="font-bold text-5xl">
          Name It
        </Link>
      </div>

      {/* Hamburger menu for mobile view */}
      <button
        className="block sm:hidden cursor-pointer"
        onClick={toggleMobileMenu}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="2" y1="5" x2="22" y2="5" />
          <line x1="2" y1="13" x2="22" y2="13" />
          <line x1="2" y1="21" x2="22" y2="21" />
        </svg>
      </button>

      {/* Mobile menu */}
      <div className="relative">
        {/* Cancel button */}
        {showMobileMenu && (
          <div
            className="absolute top-0 right-0 z-50 text-stone-50 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <CancelRounded fontSize="large" />
          </div>
        )}

        <div
          className={`fixed top-0 left-0 w-full h-full bg-stone-800 text-white z-40 ${
            showMobileMenu ? "flex" : "hidden"
          } justify-center items-center`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/tool1"
                className="p-4 rounded hover:bg-stone-700 flex flex-row gap-3 place-items-center"
                onClick={toggleMobileMenu}
              >
                <WallpaperRounded fontSize="large" />
                <p>Background Remover</p>
              </a>
            </li>
            <li>
              <a
                href="/tool2"
                className="p-4 rounded hover:bg-stone-700 flex flex-row gap-3 place-items-center"
                onClick={toggleMobileMenu}
              >
                <AddCardRounded fontSize="large" />
                <p>Fake Card Generator</p>
              </a>
            </li>
            <li>
              <a
                href="/tool3"
                className="p-4 rounded hover:bg-stone-700 flex flex-row gap-3 place-items-center"
                onClick={toggleMobileMenu}
              >
                <AddAPhotoRounded fontSize="large" />
                <p>Photo Editor</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop menu */}
      <div>
        <ul className="sm:flex gap-4 flex-row place-items-center h-full hidden">
          <li>
            <a
              href="/tool1"
              className="p-4 rounded hover:bg-stone-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              <WallpaperRounded fontSize="large" />
            </a>
          </li>
          <li>
            <a
              href="/tool2"
              className="p-4 rounded hover:bg-stone-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              <AddCardRounded fontSize="large" />
            </a>
          </li>
          <li>
            <a
              href="/tool3"
              className="p-4 rounded hover:bg-stone-700 hover:text-white"
              onClick={toggleMobileMenu}
            >
              <AddAPhotoRounded fontSize="large" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
