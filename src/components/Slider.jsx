import React, { useRef, useState } from "react";

const Slider = () => {
  const sliderRef = useRef(null);
  const [value, setValue] = useState(0);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    sliderRef.current.style.width = `${newValue}%`;
  };

  return (
    <div className="flex flex-col">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleInputChange}
        className="w-full h-4 bg-stone-500 rounded-lg text-stone-800"
      />
    </div>
  );
};

export default Slider;
