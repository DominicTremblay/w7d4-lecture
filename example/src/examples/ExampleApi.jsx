import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './exampleApi.css';

const ExampleApi = (props) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [heros, setHeros] = useState([]);
  const [heroId, setHeroId] = useState(Math.floor(Math.random() * 300) + 1);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`,
    })
      .then((result) => {
        console.log(result.data);
        setHeros((prev) => [...prev, result.data]);
        setLoading(false);
        setErr('');
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, [heroId]);

  const superheros = heros.map((hero) => (
    <div
      className="card"
      style={{ width: '18rem' }}
      className="hero"
      key={hero.id}
    >
      <img src={hero.image.url} alt={hero.name} /> {hero.name}
      <div className="card-body">
        <p className="card-text">
          <h3>Power Stats</h3>
          <ul className="list-group">
            <li className="list-group-item">
              Combat: {hero.powerstats.combat}
            </li>
            <li className="list-group-item">
              Durability: {hero.powerstats.durability}
            </li>
            <li className="list-group-item">
              Power: {hero.powerstats.durability}
            </li>
            <li className="list-group-item">Speed: {hero.powerstats.speed}</li>
            <li className="list-group-item">
              Strenght: {hero.powerstats.strength}
            </li>
          </ul>
        </p>
      </div>
    </div>
  ));

  const handleClick = (evt) => {
    const randomId = Math.floor(Math.random() * 300) + 1;

    setHeroId(randomId);
  };

  return (
    <div className="container">
      <h1>SuperHero API</h1>
      {loading && <h3>Loading...</h3>}

      {!loading && superheros}

      {!loading && (
        <input type="button" value="Pick a hero" onClick={handleClick} />
      )}
    </div>
  );
};

export default ExampleApi;
