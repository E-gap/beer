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
    <div className={css.mainPage}>
      <Container>
        {beer && (
          <div>
            <img
              src={beer.image_url}
              width={50}
              height={170}
              alt="appearance beer"
            />
            <p>Beer Name: {beer.name}</p>
            <p>Description: {beer.description}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Ingredients:</p>
            <table className={css.ransactionhistory}>
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