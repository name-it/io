import React from "react";
import Layout from "../components/Layout";
import { WallpaperRounded } from "@mui/icons-material";
import Button from "../components/Button";

function BackgroundRemover() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold">Background Remover</h1>

        {/* Drag and Drop Here box */}
        <div className="border-2 border-dashed p-5 flex border-stone-800 w-max mx-auto my-5 flex-col">
          {/* Logo */}
          <div className="text-5xl m-10 flex flex-1 gap-3 place-items-center">
            <WallpaperRounded fontSize="" />
            <span className="text-2xl">Drag and Drop Here</span>
          </div>

          {/* Text */}
          <p className="uppercase text-center text-xl">Or</p>

          {/* Upload Image Button */}
          <div className="flex flex-1 justify-center mt-10">
            <Button variant="primary">Upload Image</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BackgroundRemover;
