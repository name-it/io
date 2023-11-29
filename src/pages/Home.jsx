import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container mx-auto border">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div>Body</div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
