import InvestorItem from "../ui/InvestorItem";

function Investor() {
  return (
    <div className="my-10 px-3 md:px-12">
      <h2 className="font-semibold text-3xl text-center px-8">Our Investors</h2>
      <ul className="flex flex-row  my-7 flex-wrap justify-center items-center gap-3 py-6 mx-auto max-w-[40rem]">
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />
        <InvestorItem src="investor.png" />

        <InvestorItem src="investor.png" />
      </ul>
    </div>
  );
}

export default Investor;
