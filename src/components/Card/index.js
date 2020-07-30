import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ name, url }) => {

  const [pokemon, setPokemon] = useState('')

  useEffect(() => {

    axios.get(url).then(response => {
      setPokemon(response.data)
    })

  }, [url])

  return (
    <div className="card">

      <h1>{name}</h1>

      {pokemon.types === undefined || (

        <>
          <ul className="types">
            {pokemon.types.map(type => (
              <li key={type.type.name} className={type.type.name}>{type.type.name}</li>
            ))}
          </ul>

          <img src={pokemon.sprites.front_default} alt={name} />

          <ul>
            <li>Height:{pokemon.height}</li>
            {pokemon.stats.map(stat => (
              <li>{stat.stat.name}: {stat.base_stat}</li>
            ))}
          </ul>

        </>



      )}


    </div>
  );
};

export default Card;