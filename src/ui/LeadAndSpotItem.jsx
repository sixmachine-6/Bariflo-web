function LeadAndSpotItem({ src, alt, href }) {
  return (
    <li className="max-w-[25rem]">
      <a href={href}>
        <img className="h-[25rem]" src={src} alt={alt} />
      </a>
    </li>
  );
}

export default LeadAndSpotItem;
