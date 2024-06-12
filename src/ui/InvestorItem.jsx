function InvestorItem({ src }) {
  return (
    <li className="px-1 lg:px-2 py-1 lg:py-6">
      <img className="h-[2rem] lg:h-[3rem]" src={src} alt="investor" />
    </li>
  );
}

export default InvestorItem;
