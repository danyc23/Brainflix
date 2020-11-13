import { Link } from "react-router-dom";
function SideVideo(props) {
  return (
    <li className="side-video__section__item">
      <Link to={`/videos/${props.id}`}>
        <section className="side-video__img-section">
          <img
            className="side-video__img"
            src={props.image}
            alt="first video"
          />
        </section>
        <section className="side-video__description">
          <h5 className="side-video__title">{props.title}</h5>
          <p className="side-video__channel">{props.channel}</p>
        </section>
      </Link>
    </li>
  );
}

export default SideVideo;
