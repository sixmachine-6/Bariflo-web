import partnerLogo from "/partner.svg";
import mobileLogo from "/mobile.svg";
function Service() {
  return (
    <div className="space-y-8 py-5 lg:px-12 flex flex-col items-center md:py-16">
      <h2 className="text-center font-bold text-xl py-6 sm:text-2xl px-4 md:text-3xl">
        Building India's Largest Aquaculture Market Place
      </h2>
      <img
        src={partnerLogo}
        alt="partner"
        className="hidden px-8 h-[22rem] md:block"
      />
      <img
        src={mobileLogo}
        alt="partner"
        className="w-[12rem] sm:w-[20rem] md:hidden"
      />
    </div>
  );
}

export default Service;
