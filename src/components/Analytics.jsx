import laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="bg-white py-16 w-full">
      <div className="grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={laptop} alt={"/"} />
        <div className="flex flex-col">
          <p className="text-[#00df9a] py-4 font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-black text-4xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <Button className={"text-green-300 bg-black mt-2"} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
