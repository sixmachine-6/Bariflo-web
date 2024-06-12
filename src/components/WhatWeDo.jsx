import WeDoBox from "./../ui/WeDoBox";

function WhatWeDo({ reference }) {
  const h3Style =
    "text-blue-600 font-bold text-3xl text-center tracking-wide md:text-left md:text-4xl";
  const h2Style =
    "text-black font-semibold text-xl text-center md:text-left md:text-3xl";
  const pStyle = "text-stone-800 text-center md:text-left md:text-[17.5px]";
  return (
    <div ref={reference} className="px-2 bg-stone-100">
      <h2 className="font-semibold text-3xl pt-10 text-center">What We Do</h2>

      <WeDoBox src="/whatWeDo/weDo1.png" alt="aqua-bodies">
        <h3 className={h3Style}>Bariflo Cybernetics</h3>
        <h2 className={h2Style}>Intelligent Aqua Bodies Management</h2>
        <p className={pStyle}>
          Our patented sediment aeration device diffuses air at the sediment
          level, enhancing dissolved oxygen and reducing energy consumption by
          up to 75% and capital costs by 20%. Our AI-based monitoring device
          provides real-time data across the waterbody, predicting water quality
          parameters like dissolved oxygen, ammonia, phosphate, and more. It
          activates aeration and monitoring processes as needed. Additionally,
          our intelligent floating agriculture platform uses phytoremediation to
          remove nitrogen and phosphorus, reducing algae and weed growth.
        </p>
      </WeDoBox>

      <WeDoBox src="whatWeDo/weDo2.png" alt="water-bodies">
        <h3 className={h3Style}>Bariflo Cybernetics</h3>

        <h2 className={h2Style}>Intelligent Water Bodies Management</h2>

        <p className={pStyle}>
          Rejuvenation of water bodies involves restoring their biological
          functioning and biodiversity. As per the Central Pollution Control
          Board (CPCB) guidelines, indicators for different water uses are
          evaluated. The restoration process aims to revive the original
          biodiversity, considering both past and present fisheries potential.
          It also seeks to enhance the aesthetic qualities of the natural
          ecosystem, ensuring a complete restoration of the water body's health
          and beauty.
        </p>
      </WeDoBox>
    </div>
  );
}

export default WhatWeDo;
