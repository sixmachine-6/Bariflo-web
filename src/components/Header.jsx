import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-scroll";
function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav
        className="flex w-full justify-between sm:absolute py-4 
    items-center text-blue-600  px-4 sm:text-white"
      >
        <h2 className="text-2xl md:text-4xl font-bold lg:pl-8">
          Bariflo Cybernetics
        </h2>
        <IoMenuOutline
          className="text-4xl sm:hidden"
          onClick={() => setShowNav(!showNav)}
        />

        <ul className=" text-2xl capitalize hidden sm:flex">
          <li className="lg:px-6  px-3 lg:mx-6  font-semibold hover:cursor-pointer">
            <Link to="whatwedo" smooth="true" duration={500}>
              What we do
            </Link>
          </li>
          <li className="lg:px-6   px-3 lg:mx-6   font-semibold hover:cursor-pointer">
            <Link to="about" smooth="true" duration={500}>
              About
            </Link>
          </li>
          <li className="lg:px-6  px-3  lg:mx-6  font-semibold hover:cursor-pointer">
            <Link to="contact" smooth="true" duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {showNav && (
        <ul className=" text-md capitalize text-blue-600 flex justify-between mx-4 py-2 sm:hidden">
          <li className=" mx-3   font-bold hover:cursor-pointer">
            <Link to="whatwedo" smooth="true" duration={500}>
              What we do
            </Link>
          </li>
          <li className="  mx-3 font-bold hover:cursor-pointer">
            <Link to="about" smooth="true" duration={500}>
              About
            </Link>
          </li>
          <li className="mx-3 font-bold hover:cursor-pointer">
            <Link to="contact" smooth="true" duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Header;
