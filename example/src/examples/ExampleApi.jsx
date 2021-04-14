import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './exampleApi.css';

const ExampleApi = (props) => {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [heros, setHeros] = useState([]);
  const [heroId, setHeroId] = useState(1);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/${process.env.REACT_APP_API_TOKEN}/${heroId}`,
    })
      .then((result) => {
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
    <li className="hero" key={hero.id}>
      <img src={hero.image.url} alt={hero.name} /> {hero.name}
    </li>
  ));

  const handleClick = (evt) => {
    const randomId = Math.floor(Math.random() * 300) + 1;

    setHeroId(randomId);
  };

  return (
    <>
      <h1>SuperHero API</h1>
      {loading && <h3>Loading...</h3>}

      {!loading && superheros}

      {!loading && (
        <input type="button" value="Pick a hero" onClick={handleClick} />
      )}
    </>
  );
};

export default ExampleApi;
