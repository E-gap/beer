import css from "./Button.module.css";
import { useBeerStore } from "../../stores/useBeerStore";
import { shallow } from "zustand/shallow";

const Button = ({ onClick }) => {
  const { selectedBeers } = useBeerStore(
    (state) => ({
      selectedBeers: state.selectedBeers,
    }),
    shallow
  );

  return (
    <button type="button" className={css.button} onClick={onClick}>
      Delete {selectedBeers.length} item
    </button>
  );
};

export default Button;
