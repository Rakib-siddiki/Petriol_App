import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <nav className="navbar-nav ease-linear duration-300 bg-primary py-[27px] w-full relative">
        <div className="max-w-container mx-auto">
          <div className="md:flex md:items-center justify-end px-3 xl:p-0">
            <div className="">
              <a href="#">
                <img className="scale-90 xl:scale-100" src={logo} alt="logo" />
              </a>
            </div>
            <div
              onClick={handleClick}
              className="md:hidden absolute top-10 right-0 px-5"
            >
              {show ? (
                <GrClose className="text-2xl"></GrClose>
              ) : (
                <FaBars className="text-2xl"></FaBars>
              )}
            </div>
            <div
              className={`md:ml-auto pl-3 
              ${
                show ? "block" : "hidden"
              } md:flex md:items-center`}
            >
              <ul className="md:flex ">
                <li>
                  <a
                    className="hover:text-slate-950 duration-700 py-2 font-pops  text-base font-semibold text-white mr-6 xl:mr-[47px]"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-7 xl:mr-[47px]"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-7 xl:mr-[47px]"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-950 duration-700 py-2 font-pops text-base font-semibold text-white mr-7 xl:mr-[47px]"
                    href="#"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-slate-950 duration-700 py-2 font-pops  text-base font-semibold text-white mr-[47px]"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <button className="bg-transparent  hover:bg-white  hover:text-primary duration-700 py-2 px-3 mt-3 md:m-0 xl:py-3 xl:px-8 border-2 border-white font-pops text-white text-base font-semibold">
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
