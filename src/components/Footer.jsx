import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full text-gray-300 py-16">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 px-4">
        <div>
          <h1 className="text-[#00df9a] text-3xl font-bold">REACT.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between pr-[14rem] text-gray-300 lg:pr-[5rem]  py-6">
            <FaFacebookSquare className="text-gray-300" size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className="text-capitalise flex justify-between py-8 lg:col-span-2">
          <div>
            <h4 className="font-medium text-gray-400">Solutions</h4>
            <p className="py-1.5">Analytucs</p>
            <p className="py-1.5">Marketing</p>
            <p className="py-1.5">Commerce</p>
            <p>Insights</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-400">Support</h4>
            <p className="py-1.5">Pricing</p>
            <p className="py-1.5">Documentation</p>
            <p className="py-1.5">Guides</p>
            <p>API Status</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-400">Company</h4>
            <p className="py-1.5">About</p>
            <p className="py-1.5">Blog</p>
            <p className="py-1.5">Jobs</p>
            <p className="py-1.5">Press</p>
            <p>Careers</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-400">Legal</h4>
            <p className="py-1.5">claim</p>
            <p className="py-1.5">policy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
