import ReactTyped from "react-typed";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="font-bold p-2  text-[#00df9a]">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="py-4 flex justify-center font-bold text-xl sm:text-4xl md:text-5xl">
          <h2 className="pr-1 sm:pr-2 md:pr-3">Fast, flexible financing for</h2>
          <ReactTyped
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></ReactTyped>
        </div>
        <p className="text-gray-500 font-bold text-xl md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] text-black rounded-md py-3 mt-6 mx-auto px-[3rem]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
