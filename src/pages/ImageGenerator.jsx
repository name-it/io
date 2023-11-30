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

  // Create Image Function
  const handleCreateImage = () => {
    query({ inputs: text });

    // Set the dummy image till then
    setImage("src/assets/dummy_image.png");
  };

  // Download Image
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = image;
    link.click();
  };

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
      <Button onClick={handleCreateImage}>Create Image</Button>
      <br />
      {/* Display Image if available */}
      {image && (
        <>
          <div className="w-96 flex mx-auto p-2 border-2 border-dotted border-stone-900">
            {image === "src/assets/dummy_image.png" ? (
              <img
                src={image}
                alt="Created image"
                className="w-full animate-pulse"
              />
            ) : (
              <img src={image} alt="Created image" className="w-full" />
            )}
          </div>

          {image === "src/assets/dummy_image.png" ? (
            <p className="text-stone-700 font-bold text-center">
              Creating image...
            </p>
          ) : (
            <Button
              variant="primary"
              iconAfter={"download"}
              onClick={handleDownload}
            >
              Download
            </Button>
          )}
        </>
      )}
    </Layout>
  );
}

export default ImageGenerator;
