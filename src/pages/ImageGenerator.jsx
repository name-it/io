import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Button from "../components/Button";

function ImageGenerator() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/openskyml/dalle-3-xl",
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

      {/* Input */}
      <div className="flex gap-3 place-items-center my-3">
        <p className="text-stone-700 font-bold">Enter your text: </p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-stone-800 p-1 text-stone-700"
        />
      </div>
      <Button onClick={() => query({ inputs: text })}>Create Image</Button>
      {/* Display Image if available */}
      {image && <img src={image} alt="Created image" className="w-full" />}
    </Layout>
  );
}

export default ImageGenerator;