import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState } from "react";
import ImageUploader from "../components/ImageUploader";

function ImageResizer() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  //   Function to Handle Download Image
  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = selectedImage;
    link.download = "image.png";
    link.click();
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

      {/* If image is available then Download Button should be visible */}
      {selectedImage && (
        <Button
          variant="primary"
          iconBefore="download"
          onClick={handleDownloadImage}
        >
          Download
        </Button>
      )}
    </Layout>
  );
}

export default ImageResizer;
