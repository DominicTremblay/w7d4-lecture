import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './exampleApi.css';

const ExampleApi = (props) => {
  // apiUrl => `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 780) + 1);
  const [heros, setHeros] = useState([]);

  // loading a superhero
  // api request => sideeffect

  useEffect(() => {
    axios
      .get(`/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`)
      .then((response) => {
        console.log(response.data);
        const newHero = response.data;
        setHeros((prevHeros) => [...prevHeros, newHero]);
      })
      .catch((err) => console.log(err.message));
  }, [heroId]);

  const heroList = heros.map((hero) => (
    <div key={hero.id} className="card" style={{ width: '18rem' }}>
      <img src={hero.image.url} className="card-img-top" alt={hero.name} />

      <div className="card-body">

        <p className="card-text">
          {hero.name}
          <ul>
            <li>Intelligence: {hero.powerstats.intelligence} </li>
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

      {heroList}


      <input type='button' value='Add New Supe' onClick={() => setHeroId(Math.floor(Math.random() * 780) + 1)}/>
    </div>
  );
};

export default ExampleApi;
