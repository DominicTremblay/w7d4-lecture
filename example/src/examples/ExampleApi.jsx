import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './exampleApi.css';

const ExampleApi = (props) => {
  const [heros, setHeros] = useState([]);
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 300) + 1);
  const [loading, setLoading] = useState(true);

  // create a request to the api
  // side effect => useEffect

  useEffect(() => {
    console.log("Axios quest executed!")
    axios({
      method: 'GET',
      url: `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`,
    })
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        setHeros((prev) => [...prev, response.data]);
      })
      .catch((err) => console.log(err));
  }, [heroId]);

  const heroList = heros.map((hero) => (
    <div className="card" style={{ width: '18rem' }}>
      <img src={hero.image.url} className="card-img-top" alt={hero.name} />{' '}
      {hero.name}
      <div className="card-body">
        <p className="card-text">
          <ul>
            <li>Intelligence: {hero.powerstats.intelligence}</li>
            <li>strength: {hero.powerstats.strength}</li>
            <li>speed: {hero.powerstats.speed}</li>
            <li>power: {hero.powerstats.power}</li>
          </ul>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h1>SuperHero API</h1>

      {loading && <h3>Loading...</h3>}

      {!loading && heroList}

      {!loading && (
        <input
          type="button"
          value="Add Hero"
          onClick={() => setHeroId(Math.floor(Math.random() * 300) + 1)}
        />
      )}
    </div>
  );
};

export default ExampleApi;
