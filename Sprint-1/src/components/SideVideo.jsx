function SideVideo(props) {
  return (
    <li className="side-video__section__item">
      <img className="side-video__img" src={props.image} alt="first video" />
      <h4 className="side-video__title">{props.title}</h4>
      <h5 className="side-video__channel">{props.channel}</h5>
    </li>
  );
}

export default SideVideo;
