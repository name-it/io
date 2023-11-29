import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="my-4">
        <Link to={"/background-remover"}>
          <Button variant="primary" iconBefore="wallpaper">
            Background Remover
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
