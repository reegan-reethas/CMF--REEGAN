import { useEffect, useState } from "react";
import { SliderData } from "../data/SliderData";
import SliderB from "./SliderB";
import SliderA from "./SliderA";
import { useParams } from "react-router-dom";

const Slider = () => {
  const { URL__Params__Category } = useParams();
  const [indexSliderA, setIndexSliderA] = useState(0);
  const [indexSliderB, setIndexSliderB] = useState(0);
  useEffect(() => {
    localStorage.setItem(
      "LOCAL__STORAGE__SLIDER__STATE",
      JSON.stringify(URL__Params__Category)
    );
  }, []);

  const sliderCategoryA = SliderData.data[0] || {};
  const sliderCategoryB = SliderData.data[1] || {};

  const prevSlide = (prevSliderA) => {
    if (sliderCategoryA.category === SliderData.data[0].category) {
      const isFirstSlide = indexSliderA === 0;
      const newIndex = isFirstSlide
        ? sliderCategoryA.slider.length - 1
        : indexSliderA - 1;
      setIndexSliderA(newIndex);
    }

    if (sliderCategoryB.category === SliderData.data[1].category) {
      const isFirstSlide = indexSliderB === 0;
      const newIndex = isFirstSlide
        ? sliderCategoryB.slider.length - 1
        : indexSliderB - 1;
      setIndexSliderB(newIndex);
    }
  };

  const nextSlide = () => {
    if (sliderCategoryA.category === SliderData.data[0].category) {
      const isLastSlide = indexSliderA === sliderCategoryA.slider.length - 1;
      const newIndex = isLastSlide ? 0 : indexSliderA + 1;
      setIndexSliderA(newIndex);
    }

    if (sliderCategoryB.category === SliderData.data[1].category) {
      const isLastSlide = indexSliderB === sliderCategoryB.slider.length - 1;
      const newIndex = isLastSlide ? 0 : indexSliderB + 1;
      setIndexSliderB(newIndex);
    }
  };

  const goToSlide = (slideIndex) => {
    if (sliderCategoryA.category === SliderData.data[0].category) {
      setIndexSliderA(slideIndex);
    }

    if (sliderCategoryB.category === SliderData.data[1].category) {
      setIndexSliderB(slideIndex);
    }
  };

  return (
    <>
      {/* Show Active Slider */}
      {sliderCategoryA.category === URL__Params__Category && (
        <SliderA
          sliderCategoryA={sliderCategoryA}
          indexSliderA={indexSliderA}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
        />
      )}

      {sliderCategoryB.category === URL__Params__Category && (
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
