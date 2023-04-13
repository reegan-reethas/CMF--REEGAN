import { useEffect, useState } from "react";
import { SliderData } from "../data/SliderData";
import SliderB from "./SliderB";
import SliderA from "./SliderA";

const Slider = () => {
  const localStorageSlider =
    JSON.parse(localStorage.getItem("state")) || "Category A";
  const [activeSlider, setActiveSlider] = useState(localStorageSlider);
  const [indexSliderA, setIndexSliderA] = useState(0);
  const [indexSliderB, setIndexSliderB] = useState(0);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(activeSlider));
  }, [activeSlider]);

  const sliderCategoryA = SliderData.data[0].slider || [];
  const sliderCategoryB = SliderData.data[1].slider || [];

  const filterSliderCategory = (sliderCategory) => {
    setActiveSlider(sliderCategory);
  };

  const prevSlide = (prevSliderA) => {
    if (prevSliderA === "prevSliderA") {
      const isFirstSlide = indexSliderA === 0;
      const newIndex = isFirstSlide
        ? sliderCategoryA.length - 1
        : indexSliderA - 1;
      setIndexSliderA(newIndex);
    } else {
      const isFirstSlide = indexSliderB === 0;
      const newIndex = isFirstSlide
        ? sliderCategoryB.length - 1
        : indexSliderB - 1;
      setIndexSliderB(newIndex);
    }
  };

  const nextSlide = (nextSliderA) => {
    if (nextSliderA === "nextSliderA") {
      const isLastSlide = indexSliderA === sliderCategoryA.length - 1;
      const newIndex = isLastSlide ? 0 : indexSliderA + 1;
      setIndexSliderA(newIndex);
    } else {
      const isLastSlide = indexSliderB === sliderCategoryB.length - 1;
      const newIndex = isLastSlide ? 0 : indexSliderB + 1;
      setIndexSliderB(newIndex);
    }
  };

  const goToSlide = (slideIndex, sliderId) => {
    if (sliderId <= 3) {
      setIndexSliderA(slideIndex);
    } else {
      setIndexSliderB(slideIndex);
    }
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
        <SliderA
          sliderCategoryA={sliderCategoryA}
          indexSliderA={indexSliderA}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
        />
      ) : (
        <SliderB
          sliderCategoryB={sliderCategoryB}
          indexSliderB={indexSliderB}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
        />
      )}
    </>
  );
};

export default Slider;
