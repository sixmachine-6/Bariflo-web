import WeDoBox from "../ui/WeDoBox";

function About() {
  const h3Style =
    "text-blue-600 font-bold text-3xl text-center tracking-wide md:text-left md:text-4xl";
  const h2Style =
    "text-black font-semibold text-xl text-center md:text-left md:text-3xl";
  const pStyle =
    "max-w-[38rem] text-stone-800 text-center md:text-left md:text-[17.5px]";
  return (
    <div className="flex justify-center items-center my-5 lg:mx-16">
      <WeDoBox src="favicon.png" alt="bariflo-cybernetics">
        <h3 className={h3Style}>About Us</h3>
        <h3 className={h3Style}>Let's Break the Barrier</h3>
        <h2 className={h2Style}>Bariflo Cybernetics</h2>
        <p className={pStyle}>
          Bariflo Cybernetics is an industry 4.0 compliant startup has developed
          water body management system based on Fluid dynamics, IOT, robotics,
          AI for aqua-farm management, urban water-body management. We offer
          technological solution for aquafarmers, co-operatives, villages,
          communities, cities & industries at a variety of scales.
        </p>
      </WeDoBox>
    </div>
  );
}

export default About;
