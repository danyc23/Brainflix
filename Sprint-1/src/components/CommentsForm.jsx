import Input from "./Input";
import Btn from "./Btn";

function CommentsForm() {
  return (
    <section className="comments-form">
      <h4>JOIN THE CONVERSATION</h4>
      <form action="post">
        <Input
          type="text"
          placeholder="That was easily the most spectacular BMX moment ever."
        />
        <Btn type="submit" className="comments-form__btn" text="COMMENT" />
      </form>
    </section>
  );
}

export default CommentsForm;
