import { useEffect, useState } from "react";
import { SliderData } from "../data/SliderData";
import SliderB from "./SliderB";
import SliderA from "./SliderA";

const Slider = () => {
  const localStorageSlider =
    JSON.parse(localStorage.getItem("state")) || "Category A";
  const [activeSlider, setActiveSlider] = useState(localStorageSlider);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(activeSlider));
  }, [activeSlider]);

  const sliderCategoryA = SliderData.data[0].slider || [];
  const sliderCategoryB = SliderData.data[1].slider || [];

  const filterSliderCategory = (sliderCategory) => {
    setActiveSlider(sliderCategory);
  };

  return (
    <>
      {/* Button Group */}
      <div className="md:container md:mx-auto pt-6">
        <div className="flex items-center justify-center space-x-4">
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  duration-500 rounded-lg ${
              activeSlider === "Category A"
                ? "active [&.active]:bg-gray-400"
                : ""
            }  `}
            onClick={() => filterSliderCategory("Category A")}
          >
            Category A
          </button>
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  duration-500 rounded-lg ${
              activeSlider === "Category B"
                ? "active [&.active]:bg-gray-400"
                : ""
            }  `}
            onClick={() => filterSliderCategory("Category B")}
          >
            Category B
          </button>
        </div>
      </div>
      {/* Show Active Slider */}
      {activeSlider === "Category A" ? (
        <SliderA sliderCategoryA={sliderCategoryA} />
      ) : (
        <SliderB sliderCategoryB={sliderCategoryB} />
      )}
    </>
  );
};

export default Slider;
