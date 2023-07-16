import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { useBeerStore } from "../../stores/useBeerStore";
import { shallow } from "zustand/shallow";
import css from "./MainPage.module.css";
import BeersList from "../../components/BeersList/BeersList";
import Button from "../../components/Button/Button";

const MainPage = () => {
  const { beers, addBeers, selectedBeers, deleteBeers } = useBeerStore(
    (state) => ({
      beers: state.beers,
      addBeers: state.addBeers,
      selectedBeers: state.selectedBeers,
      deleteBeers: state.deleteBeers,
    }),
    shallow
  );

  useEffect(() => {
    addBeers();
  }, [addBeers]);

  return (
    <div className={css.mainPage}>
      <Container>
        {selectedBeers.length > 0 && <Button onClick={deleteBeers} />}
        <BeersList beers={beers.slice(0, 15)} />
      </Container>
    </div>
  );
};

export default MainPage;
