import Video from "../Assets/Video/BrainStation_Sample_Video.mp4";

function Hero() {
  return (
    <section className="video-section">
      <video className="video" controls src={Video}></video>
    </section>
  );
}

export default Hero;
