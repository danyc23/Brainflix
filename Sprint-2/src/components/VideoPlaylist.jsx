import SideVideo from "./SideVideo";

function VideoPlaylist(props) {
  return (
    <section className="side-video__section">
      <h4 className="side-video__section__title">NEXT VIDEO</h4>
      <ul className="side-video__list">
        {props.videos.map((video, i) => {
          return (
            <SideVideo
              key={i}
              image={video.image}
              title={video.title}
              channel={video.channel}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default VideoPlaylist;
