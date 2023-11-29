import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="my-4">
        <Button variant="primary" iconBefore="wallpaper">
          <Link to={"/background-remover"} className="w-max">
            Background Remover
          </Link>
        </Button>
      </div>
    </Layout>
  );
}

export default Home;
