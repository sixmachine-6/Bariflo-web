function AwardItem({ src }) {
  return (
    <li className="px-2 py-6">
      <img className="h-[3.5rem] lg:h-[4rem]" src={src} alt="award" />
    </li>
  );
}

export default AwardItem;
