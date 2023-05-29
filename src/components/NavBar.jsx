import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
    console.log(nav);
  };

  return (
    <div className="text-white flex h-24 justify-between items-center px-4 max-w-[1260px] mx-auto">
      <h1 className="w-full font-bold text-3xl uppercase  text-[#00df9a]">
        React.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={`${
          nav
            ? "p-4 h-full fixed left-0 top-0 w-[60%] border-r border-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        } md:hidden`}
      >
        <h1 className="w-full font-bold text-3xl mt-4 h-10 uppercase  text-[#00df9a]">
          React.
        </h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-800">Home</li>
          <li className="p-4 border-b border-gray-800">Company</li>
          <li className="p-4 border-b border-gray-800">Resources</li>
          <li className="p-4 border-b border-gray-800">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
