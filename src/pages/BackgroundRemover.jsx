import React from "react";
import Layout from "../components/Layout";
import { WallpaperRounded } from "@mui/icons-material";
import Button from "../components/Button";
import ReactImageUploading from "react-images-uploading";
import { useState, useEffect } from "react";

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
        <p>5 + 7 = {output}</p>
        <Button onClick={runScript}>Run Python</Button>

        <ReactImageUploading
          value={selectedImage}
          onChange={setSelectedImage}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="border-2 border-dashed p-5 flex border-stone-800 w-max mx-auto my-5 flex-col">
              {/* Uploading Area */}
              <div
                className={`${
                  imageList.length === 0 ? "flex flex-col" : "hidden"
                }`}
              >
                {/* Logo */}
                <div
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                  className={`text-5xl m-5 flex flex-1 gap-3 place-items-center p-5 border-dashed border-4`}
                >
                  <WallpaperRounded fontSize="" />
                  <span className="text-2xl">Drag and Drop Here</span>
                </div>

                {/* Text */}
                <p className="uppercase text-center text-xl">Or</p>

                {/* Upload Image Button */}
                <div className="flex flex-1 justify-center mt-5">
                  <Button variant="primary" onClick={onImageUpload}>
                    Upload Image
                  </Button>
                </div>
              </div>

              {imageList.map((image, index) => (
                <div key={index} className="image-item w-96">
                  <img
                    src={image["data_url"]}
                    alt=""
                    width="100%"
                    className="mb-3"
                  />
                  <div className="image-item__btn-wrapper flex gap-2">
                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button onClick={() => onImageRemove(index)}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ReactImageUploading>
      </div>
    </Layout>
  );
}

export default BackgroundRemover;
