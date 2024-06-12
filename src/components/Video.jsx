function Video() {
  return (
    <div className="max-h-screen mt-[-0.2rem] overflow-hidden">
      <video loop autoPlay muted className="w-full">
        <source src="/main-video.mp4"></source>
      </video>
    </div>
  );
}

export default Video;
