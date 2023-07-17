import css from "./BeersList.module.css";
import { useBeerStore } from "../../stores/useBeerStore";
import { Link } from "react-router-dom";

const BeersList = ({ beers }) => {
  const toSelectBeer = useBeerStore((state) => state.toSelectBeer);

  const selectBeer = (id, event) => {
    if (event.button === 2) {
      toSelectBeer(id);
    }
  };

  return (
    <ul clzssName={css.beerList}>
      {beers.map((item) => {
        return (
          <li
            key={item.id}
            className={css.item}
            onMouseDown={(event) => selectBeer(item.id, event)}
          >
            <Link to={`/${item.id}`} className={css.link}>
              <p className={css.name}>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <img
                src={item.image_url}
                width={50}
                height={170}
                alt="appearance beer"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BeersList;
