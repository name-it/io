import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ImageUploader from "../components/ImageUploader";

function ImageResizer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = resizedImage;
    link.download = "resized_image.png";
    link.click();
  };

  const handleResizeImage = () => {
    if (selectedImage && selectedImage[0]) {
      const img = new Image();
      img.src = selectedImage[0].data_url;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = parseInt(width, 10) || img.width;
        canvas.height = parseInt(height, 10) || img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const resizedDataURL = canvas.toDataURL("image/png");
        setResizedImage(resizedDataURL);
      };
    }
  };

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">Image Resizer</h1>
      </div>

      {/* Image Uploader */}
      <ImageUploader
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      {/* Input fields for width and height */}
      <div className="mt-4 flex space-x-4">
        <input
          type="number"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <Button variant="primary" onClick={handleResizeImage}>
          Resize
        </Button>
      </div>

      {/* Display Resized Image */}
      {resizedImage && (
        <div className="mt-4">
          <img src={resizedImage} alt="Resized" style={{ maxWidth: "100%" }} />
          <Button
            className="mt-2"
            variant="primary"
            iconBefore="download"
            onClick={handleDownloadImage}
          >
            Download Resized
          </Button>
        </div>
      )}
    </Layout>
  );
}

export default ImageResizer;
