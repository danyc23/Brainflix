import Video from "../Assets/Video/BrainStation_Sample_Video.mp4";

function Hero(props) {
  return (
    <section className="video-section">
      <video
        className="video"
        controls
        src={Video}
        poster={props.poster}
      ></video>
    </section>
  );
}

export default Hero;
