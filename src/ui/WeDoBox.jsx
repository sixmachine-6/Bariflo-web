function WeDoBox({ children, src, alt }) {
  return (
    <div className="flex justify-center items-center md:gap-12 flex-col my-4 py-3 px-1  md:flex-row md:py-14 md:px-10 md:mx-12">
      <div>
        <img
          className="sm:max-w-[25rem] lg:max-w-[34rem]"
          src={src}
          alt={alt}
        />
      </div>

      <div className="py-2 space-y-2 px-4 lg:mr-7">{children}</div>
    </div>
  );
}

export default WeDoBox;
