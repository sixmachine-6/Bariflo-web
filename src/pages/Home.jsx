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
      <Header />
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
