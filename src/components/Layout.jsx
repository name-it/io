import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="container mx-auto m-3 font-serif">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div className="my-4">{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
