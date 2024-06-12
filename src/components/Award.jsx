import AwardItem from "../ui/AwardItem";

function Award() {
  return (
    <div className="mt-[5rem] my-10 px-3 md:px-12">
      <h2 className="font-semibold text-3xl text-center px-8">
        Awards & Recognitions
      </h2>
      <ul className="flex flex-row flex-wrap justify-center items-center gap-3 py-6 mx-auto max-w-[40rem]">
        <AwardItem src="award.png" />
        <AwardItem src="award.png" />
        <AwardItem src="award.png" />
        <AwardItem src="award.png" />

        <AwardItem src="award.png" />
        <AwardItem src="award.png" />
        <AwardItem src="award.png" />
        <AwardItem src="award.png" />

        <AwardItem src="award.png" />
      </ul>
    </div>
  );
}

export default Award;
