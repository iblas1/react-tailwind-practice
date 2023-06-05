import Button from "./Button";

const SignUP = () => {
  return (
    <div className="bg-black text-white w-full py-20 px-5">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="pb-8">Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="">
          <div className="flex flex-col justify-between items-center sm:flex-row">
            <input
              className="text-black flex w-full p-3 rounded border-none"
              type={"text"}
              placeholder="Enter Email"
            />

            <button
              className={
                "bg-[#00df9a] text-black rounded-md py-3 px-4 my-4 w-[200px] font-medium ml-4"
              }
            >
              {" "}
              Notify Me{" "}
            </button>
          </div>
          <p className="mt-6">
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
