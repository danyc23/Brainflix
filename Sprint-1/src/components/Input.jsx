function Input(props) {
  return (
    <section className="input">
      <input
        className="input__text"
        type={props.text}
        placeholder={props.placeholder}
      />
    </section>
  );
}
export default Input;
