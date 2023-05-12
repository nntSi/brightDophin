import { motion, useScroll } from "framer-motion";
import logo from "../../assets/image/manud.png";
import { Link } from "react-scroll";
export default function NavBar() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="sticky top-0 z-50 bg-white">
      <div className="h-16">
        <div className="flex h-full shadow-sm justify-between items-center lg:px-64 px-4">
          <div className="flex items-center">
            <img className="w-10 h-10" src={logo} />
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <Link to="a" smooth={true} duration={500} className="text-sm text-gray-700 duration-200 hover:text-primary-clr cursor-pointer">
              Home
            </Link>
            <Link to="b" smooth={true} duration={500} className="text-sm text-gray-700 duration-200 hover:text-primary-clr cursor-pointer">
              Our Project
            </Link>
            <Link to="c" smooth={true} duration={500} className="text-sm text-gray-700 duration-200 hover:text-primary-clr cursor-pointer">
              Our Services
            </Link>
            <Link to="d" smooth={true} duration={500} className="text-xs font-semibold cursor-pointer text-white px-6 py-2 rounded-3xl shadow-sm bg-primary-clr duration-200 hover:opacity-80 ">
              Sign In
            </Link>
          </div>
          <button className="rounded lg:hidden hover:text-primary-clr duration-200">
            <i className="bx bx-menu text-2xl"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
