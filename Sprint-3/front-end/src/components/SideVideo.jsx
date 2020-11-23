import { Link } from "react-router-dom";
function SideVideo(props) {
  return (
    <li className="side-video__section__item">
      <Link className="side-video__link" to={`/videos/${props.id}`}>
        <section className="side-video__img-section">
          <img
            className="side-video__img"
            src={props.image}
            alt="first video"
          />
        </section>
        <section className="side-video__description">
          <h2 className="side-video__title">{props.title}</h2>
          <p className="side-video__channel">{props.channel}</p>
        </section>
      </Link>
    </li>
  );
}

export default SideVideo;
