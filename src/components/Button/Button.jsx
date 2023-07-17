import css from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Delete
    </button>
  );
};

export default Button;
