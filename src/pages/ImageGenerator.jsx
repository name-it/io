import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Button from "../components/Button";

function ImageGenerator() {
  const [image, setImage] = useState(null);
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: {
          Authorization: `Bearer ${
            import.meta.env.VITE_STABLE_DIFFUSION_API_KEY
          }`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    setImage(URL.createObjectURL(result));
  }
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Image Generator</h1>
      <Button onClick={() => query({ inputs: "Astronaut riding a horse" })}>
        Create Image
      </Button>

      {/* Display Image if available */}
      {image && <img src={image} alt="Created image" className="w-full" />}
    </Layout>
  );
}

export default ImageGenerator;
