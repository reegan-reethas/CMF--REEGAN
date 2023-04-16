// import { Link } from "react-router-dom";
import { SliderData } from "../data/SliderData";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
  const sliderCategoryA = SliderData.data[0].category;
  const sliderCategoryB = SliderData.data[1].category;
  const navigate = useNavigate();

  const shouldRedirect = JSON.parse(
    localStorage.getItem("LOCAL__STORAGE__SLIDER__STATE")
  );

  useEffect(() => {
    if (shouldRedirect) {
      setTimeout(() => {
        return navigate(shouldRedirect, { replace: false });
      }, 3000);
    }
  }, []);

  return (
    <>
      {/* Button Group */}
      <div className="grid h-screen place-items-center md:container md:mx-auto pt-6">
        <div className="flex items-center justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4  duration-500 rounded-lg">
            <Link className="text-white" to={sliderCategoryA}>
              Category A
            </Link>
          </button>
          <button className="bg-teal-500 hover:bg-teal-700 text-gray-800 font-bold py-2 px-4  duration-500 rounded-lg">
            <Link className="text-white" to={sliderCategoryB}>
              Category B
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Category;
