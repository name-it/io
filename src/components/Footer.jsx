import React from "react";

function Footer() {
  return (
    <footer className="bg-stone-800 text-white p-4 flex justify-center">
      <p className="font-serif text-sm">
        Copyright &copy; {new Date().getFullYear()} Multi-Tool Website
      </p>
    </footer>
  );
}

export default Footer;
