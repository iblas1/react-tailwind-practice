import laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="bg-white py-16 w-full px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={laptop} alt={"/"} />
        <div className="flex flex-col p-4 mx-auto text-center w-full sm:text-left">
          <p className="text-[#00df9a] py-4 font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button
            className={
              "text-[#00df9a] bg-black w-[200px] rounded-md py-3 mt-5 mx-auto px-[3rem] md:px-[3rem] md:mx-0"
            }
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
