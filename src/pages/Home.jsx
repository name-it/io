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

        {/* Stating some things */}
        <div className="flex flex-col">
          <p>mode of app: {import.meta.env.MODE}</p>
          <p>base url of app: {import.meta.env.BASE_URL}</p>
          <p>is in production: {import.meta.env.PROD && "yes"}</p>
          <p>is in development: {import.meta.env.DEV && "yes"}</p>
          <p>server running: {import.meta.env.SSR && "yes"}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
