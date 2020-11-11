import CommentsForm from "./CommentsForm";
import Comment from "./Comment";
import ViewsLogo from "../Assets/Icons/SVG/Icon-views.svg";
import LikesLogo from "../Assets/Icons/SVG/Icon-likes.svg";

function VideoDesc(props) {
  let desc = props.desc;
  const commentArray = props.comments;
  return (
    <section className="video-desc">
      <h1 className="video-desc__title">{desc.title}</h1>
      <section className="video-desc__tablet">
        <div className="video-desc__by">
          <h4 className="video-desc__by__channel">{desc.channel}</h4>
          <h4 className="video-desc__by__date">{desc.timestamp}</h4>
        </div>
        <section className="ratings">
          <div className="video-desc__views">
            <img src={ViewsLogo} alt="views icon" />
            <h4 className="video-desc__views-number">{desc.views}</h4>
          </div>
          <div className="video-desc__likes">
            <img src={LikesLogo} alt="likes icon" />
            <h4 className="video-desc__likes-number">{desc.likes}</h4>
          </div>
        </section>
      </section>
      <section className="video-desc__text__section">
        <p className="video-desc__text">{props.desc.description}</p>
      </section>
      <h4 className="comments-section__title">3 Comments</h4>
      <CommentsForm />
      <ul>
        {commentArray.sort().map((comment) => {
          return (
            <Comment
              image={comment.image}
              name={comment.name}
              date={comment.time}
              comment={comment.text}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default VideoDesc;
