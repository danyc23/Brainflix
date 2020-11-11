function SideVideo(props) {
  return (
    <li className="side-video__section__item">
      <section className="side-video__img-section">
        <img className="side-video__img" src={props.image} alt="first video" />
      </section>
      <section className="side-video__description">
        <h5 className="side-video__title">{props.title}</h5>
        <p className="side-video__channel">{props.channel}</p>
      </section>
    </li>
  );
}

export default SideVideo;
