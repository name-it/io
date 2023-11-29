import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <div className="container mx-auto my-3 font-serif">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div className="my-4">
        <Link to={"/background-remover"}>
          <Button variant="primary" iconBefore="wallpaper">
            Background Remover
          </Button>
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
