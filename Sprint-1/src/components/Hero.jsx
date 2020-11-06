import Video from "../Assets/Video/BrainStation_Sample_Video.mp4";

function Hero() {
  return <video className="video" controls src={Video}></video>;
}

export default Hero;
