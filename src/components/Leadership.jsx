import LeadAndSpotItem from "../ui/LeadAndSpotItem";

function Leadership() {
  return (
    <div className="py-6">
      <h2 className="font-semibold text-3xl text-center px-8">Leaderships</h2>
      <ul className="flex flex-wrap lg:py-4 md:flex-row md:px-6 lg:mx-6 gap-4 justify-center items-center  px-3  lg:my-7 my-5">
        <LeadAndSpotItem src="1.png" alt="" />
        <LeadAndSpotItem src="2.png" alt="" />
        <LeadAndSpotItem src="3.png" alt="" />
      </ul>
    </div>
  );
}

export default Leadership;
