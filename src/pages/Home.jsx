import Video from "../components/Video";
import Header from "./../components/Header";
import Title from "./../components/Title";
import SubVideo from "./../ui/SubVideo";
import WhatWeDo from "./../components/WhatWeDo";
import Support from "../components/Support";
import Form from "./../ui/Form";
import Contact from "./../components/Contact";
import About from "../components/About";
import Footer from "../ui/Footer";
import Investor from "../components/Investor";
import Leadership from "../components/Leadership";
import Spotlight from "../components/Spotlight";
import Award from "../components/Award";
import { Element, Link } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      {/* <Header /> */}
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
          <Link
            to="what-we-do"
            smooth={true}
            duration={500}
            className="lg:px-6  px-3 lg:mx-6  font-semibold hover:cursor-pointer"
          >
            What we do
          </Link>
          <li className="lg:px-6   px-3 lg:mx-6   font-semibold hover:cursor-pointer">
            News
          </li>
          <li className="lg:px-6  px-3  lg:mx-6  font-semibold hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
      {showNav && (
        <ul className=" text-md capitalize text-blue-600 flex justify-between mx-4 py-2 sm:hidden">
          <Link
            to="what-we-do"
            smooth={true}
            duration={500}
            className=" mx-3   font-bold hover:cursor-pointer"
          >
            What we do
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="  mx-3 font-bold hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mx-3 font-bold hover:cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      )}
      <Title />
      <Video />
      <SubVideo />
      <Element name="about">
        <About />
      </Element>

      {/* <Service /> */}
      <Element name="what-we-do">
        <WhatWeDo />
      </Element>
      <Support />
      {/* <Investor /> */}
      {/* <Award />
      <Spotlight />
      <Leadership /> */}

      <Element name="contact">
        <Form />
      </Element>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
