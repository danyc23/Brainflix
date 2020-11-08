function Input(props) {
  return (
    <input
      id={props.id}
      className={props.className}
      type={props.text}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
