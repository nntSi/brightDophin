import logo from "../../assets/image/manud.png";
export default function NavBar() {
  return (
    <div className={`h-16 sticky`}>
      <div className="flex h-full shadow-sm justify-between items-center lg:px-64 px-4">
        <div className="flex items-center">
          <img className="w-10 h-10" src={logo} />
          {/* <p className="font-bold ml-3 text-slate-800">EARTH</p> */}
        </div>
        <div className="hidden lg:flex space-x-8 items-center">
          <button className="text-sm text-gray-700 duration-200 hover:text-primary-clr">
            Home
          </button>
          <button className="text-sm text-gray-700 duration-200 hover:text-primary-clr">
            Our Project
          </button>
          <button className="text-sm text-gray-700 duration-200 hover:text-primary-clr">
            Our Services
          </button>
          <button className="text-xs font-semibold text-white px-6 py-2 rounded-3xl shadow-sm bg-primary-clr duration-200 hover:opacity-80 ">
            Sign In
          </button>
        </div>
        <button className="rounded lg:hidden hover:text-primary-clr duration-200">
          <i className="bx bx-menu text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
