import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './exampleApi.css';

const ExampleApi = (props) => {
  // apiUrl => `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 731) + 1);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`,
    })
      .then((result) => {
        console.log(result.data);
        setHeroes((prev) => [...prev, result.data]);
      })
      .catch((err) => console.log(`Error: ${err.message}`));
  }, [heroId]);

  const heroesList = heroes.map((hero) => (
    <div key={hero.id} className="card" style={{ width: '18rem' }}>
      <img src={hero.image.url} className="card-img-top" alt={hero.name} />

      <h3>{hero.name}</h3>

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

      {heroesList}

      <button onClick={() => setHeroId(Math.floor(Math.random() * 731) + 1)}>Add New Hero</button>
    </div>
  );
};

export default ExampleApi;
