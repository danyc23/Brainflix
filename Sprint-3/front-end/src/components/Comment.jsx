import ProfileImg from "./ProfileImg";

function Comment(props) {
  return (
    <li className="comment__item">
      <section className="comment__item__profile-image">
        <ProfileImg
          className="profile__img profile__img__comment"
          // image={props.image}
        />
      </section>
      <section className="comment__item__right__section">
        <section className="comment__item__name-date__section">
          <h4 className="comment__item__name">{props.name}</h4>
          <h4 className="comment__item__date">{props.date}</h4>
        </section>
        <p className="comment__text">{props.comment}</p>
      </section>
    </li>
  );
}
export default Comment;
