import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Pricing = () => {
  return (
    <div className="bg-white w-full text-black py-20 px-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col rounded-lg text-center p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h1 className="font-bold text-2xl py-4">Single User</h1>
          <h1 className="font-bold text-4xl py-4 ">$149</h1>
          <div>
            <p className="py-2 border-b mx-8 font-medium mt-8">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 font-medium">500 GB Storage</p>
            <p className="py-2 border-b mx-8 font-medium">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md py-3 m-6 mx-auto px-[3.5rem] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col rounded-lg text-center p-4 mt-8 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={double}
            alt="/"
          />
          <h1 className="font-bold text-2xl py-4">Single User</h1>
          <h1 className="font-bold text-4xl py-4 ">$149</h1>
          <div>
            <p className="py-2 border-b mx-8 font-medium mt-8">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 font-medium">500 GB Storage</p>
            <p className="py-2 border-b mx-8 font-medium">Send up to 2 GB</p>
          </div>
          <button className="text-[#00df9a] bg-black rounded-md py-3 m-6 mx-auto px-[3.5rem] font-medium">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col rounded-lg text-center p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h1 className="font-bold text-2xl py-4">Single User</h1>
          <h1 className="font-bold text-4xl py-4 ">$149</h1>
          <div>
            <p className="py-2 border-b mx-8 font-medium mt-8">
              1 Granted User
            </p>
            <p className="py-2 border-b mx-8 font-medium">500 GB Storage</p>
            <p className="py-2 border-b mx-8 font-medium">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md py-3 m-6 mx-auto px-[3.5rem] font-medium">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
