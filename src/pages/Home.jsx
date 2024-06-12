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

function Home() {
  return (
    <>
      <Header />
      <Title />
      <Video />
      <SubVideo />
      <About />
      {/* <Service /> */}
      <WhatWeDo />
      <Support />
      {/* <Investor /> */}
      {/* <Award />
      <Spotlight />
      <Leadership /> */}
      <Form />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
