import Container from "../../components/Container/Container";
import css from "./BeerPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { instance } from "../../stores/useBeerStore";

const BeerPage = () => {
  const [beer, setBeer] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getSingleBeer = async () => {
      const { data } = await instance.get(`/beers/${id}`);
      setBeer(data[0]);
    };

    getSingleBeer();
  }, [id, setBeer]);

  console.log(beer);

  return (
    <div className={css.beerPage}>
      <Container>
        {beer && (
          <div className={css.beerItem}>
            <img
              src={beer.image_url}
              width={50}
              height={170}
              alt="appearance beer"
              className={css.photoBeer}
            />
            <p className={css.name}>Beer Name: {beer.name}</p>
            <p className={css.description}>Description: {beer.description}</p>
            <p className={css.brewed}>First Brewed: {beer.first_brewed}</p>
            <p className={css.ingredients}>Ingredients:</p>
            <table className={css.tableIngredients}>
              <thead>
                <tr>
                  <th>Add</th>
                  <th>Amount Value</th>
                  <th>Amount Unit</th>
                  <th>Attribute</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {beer.ingredients.hops.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.add}</td>
                      <td>{item.amount.value}</td>
                      <td>{item.amount.unit}</td>
                      <td>{item.attribute}</td>
                      <td>{item.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
};

export default BeerPage;
