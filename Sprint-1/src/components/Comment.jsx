import ProfileImg from "./ProfileImg";

function Comment(props) {
  return (
    <li className="comment__item">
      <ProfileImg />
      <h4>{props.name}</h4>
      <h4>{props.date}</h4>
      <h4>{props.comment}</h4>
    </li>
  );
}
export default Comment;
