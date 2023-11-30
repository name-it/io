import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState } from "react";
import ImageUploader from "../components/ImageUploader";

function ImageResizer() {
  const [selectedImage, setSelectedImage] = React.useState(null);
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
    </Layout>
  );
}

export default ImageResizer;
