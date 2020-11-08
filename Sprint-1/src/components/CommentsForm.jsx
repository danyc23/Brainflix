import Input from "./Input";
import Btn from "./Btn";
import ProfileImg from "./ProfileImg";

function CommentsForm() {
  return (
    <section className="comments-form">
      <ProfileImg
        image="./Images/Mohan-muruge.jpg"
        className="profile__img profile__img--form"
      />
      <div className="comments-form__right">
        <h4 className="comments-form__title">JOIN THE CONVERSATION</h4>
        <form action="post" className="form">
          <section className="comments-form__input-section">
            <Input
              type="text"
              placeholder="That was easily the most spectacular BMX moment ever."
              className="comments__input"
            />
          </section>
          <Btn type="submit" className="comments-form__btn" text="COMMENT" />
        </form>
      </div>
    </section>
  );
}

export default CommentsForm;
