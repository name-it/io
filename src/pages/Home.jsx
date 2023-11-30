import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="my-4 flex gap-2">
        <Link to={"/background-remover"}>
          <Button variant="primary" iconBefore="wallpaper">
            Background Remover
          </Button>
        </Link>
        <Link to={"/image-generator"}>
          <Button variant="primary" iconBefore="add">
            Image Generator
          </Button>
        </Link>

        {/* Secret Variable Testing */}
        <p>test secret</p>
        <p>{import.meta.env.VITE_TEST_SECRET}</p>
      </div>
    </Layout>
  );
}

export default Home;
