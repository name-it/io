import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const renderButton = (value) => (
    <Button
      key={value}
      variant="simple"
      onClick={() => handleButtonClick(value)}
    >
      {value}
    </Button>
  );

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-4">Calculator</h1>

        <div className="mx-auto w-96 border-2 p-4 shadow-2xl border-stone-700">
          <div className="flex gap-2 justify-center place-items-center">
            <div className="mb-4">
              <input
                type="text"
                value={input}
                placeholder="Enter expression"
                className="p-2 border border-gray-900 rounded text-stone-500 w-40"
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={result}
                placeholder="Result"
                className="p-2 border border-gray-900 rounded text-stone-500 w-40"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["1", "2", "3", "+"].map(renderButton)}
            {["4", "5", "6", "-"].map(renderButton)}
            {["7", "8", "9", "*"].map(renderButton)}
            {["C", "0", "=", "/"].map(renderButton)}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Calculator;
