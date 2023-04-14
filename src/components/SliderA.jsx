import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

const SliderA = ({
  sliderCategoryA,
  indexSliderA,
  prevSlide,
  nextSlide,
  goToSlide,
}) => {
  const sliderBG = sliderCategoryA.slider[indexSliderA].backgroundColor;
  const sliderTitle = sliderCategoryA.slider[indexSliderA].heading;
  const sliderSubTitle = sliderCategoryA.slider[indexSliderA].subHeading;

  return (
    <div className="max-w-[1400px] h-full w-full m-auto py-6 px-4 relative group">
      <div
        style={{
          backgroundColor: `${sliderBG}`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="flex flex-col justify-center items-center h-full text-center">
          <h3 className="text-white text-3xl pb-5">{sliderTitle}</h3>
          <h4 className="text-white text-xl pb-10">{sliderSubTitle}</h4>

          <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-lg duration-500">
            <span className="uppercase ">Book Now</span>
          </button>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      {/* Carousel Navaigator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center py-2">
        {sliderCategoryA.slider.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer rounded-full duration-500"
          >
            {indexSliderA === slideIndex ? <RxDot /> : <RxDotFilled />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderA;
