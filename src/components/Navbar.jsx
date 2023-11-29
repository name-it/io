import React from "react";

function Navbar() {
  return (
    <nav className="bg-stone-200 text-stone-700 p-4 flex justify-between font-serif">
      <div className="flex justify-start gap-4 place-items-center">
        <img
          src="src/assets/logo.jpeg"
          alt="Name It"
          className="w-16 border border-stone-900"
        />
        <a href="/" className="font-bold text-5xl">
          Name It
        </a>
      </div>

      <ul className="flex justify-end">
        <li className="mx-4">
          <a
            href="/tool1"
            className="hover:bg-stone-700 hover:text-white p-2 rounded"
          >
            Tool 1
          </a>
        </li>
        <li className="mx-4">
          <a
            href="/tool2"
            className="hover:bg-stone-700 hover:text-white p-2 rounded"
          >
            Tool 2
          </a>
        </li>
        <li className="mx-4">
          <a
            href="/tool3"
            className="hover:bg-stone-700 hover:text-white p-2 rounded"
          >
            Tool 3
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
