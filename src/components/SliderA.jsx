import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const SliderA = ({
  sliderCategoryA,
  indexSliderA,
  prevSlide,
  nextSlide,
  goToSlide,
}) => {
  const sliderBG = sliderCategoryA.slider[indexSliderA].backgroundColor;
  const sliderTitle = sliderCategoryA.slider[indexSliderA].heading;

  return (
    <div className="max-w-[1400px] h-[480px] w-full m-auto py-6 px-4 relative group">
      <div
        style={{
          backgroundColor: `${sliderBG}`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <h3 className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {sliderTitle}
        </h3>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Carousel Navaigator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center py-2">
        {sliderCategoryA.slider.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer rounded-full duration-500 ${
              indexSliderA === slideIndex ? "active [&.active]:bg-gray-400" : ""
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderA;
