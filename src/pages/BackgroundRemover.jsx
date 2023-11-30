import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import ImageUploader from "../components/ImageUploader";

function BackgroundRemover() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [output, setOutput] = useState("(loading...)");
  const runScript = () => {
    window.pyodide.loadPackage([]).then(() => {
      const output = window.pyodide.runPython("5+7");
      setOutput(output);
      console.log(output);
    });
  };

  useEffect(() => {
    window.languagePluginLoader;
  });

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">Background Remover</h1>
        {/* Running Python */}
        {/* <p>5 + 7 = {output}</p> */}
        {/* <Button onClick={runScript}>Run Python</Button> */}

        <p className="text-5xl">Comming Soon</p>

        {/* Image Uploader */}
        <ImageUploader
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </Layout>
  );
}

export default BackgroundRemover;
