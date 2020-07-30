import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import axios from 'axios';

const Card = ({ name, url, favorites }) => {

  const [pokemon, setPokemon] = useState('')
  const [favorited, setFavorited] = useState(false)

  useEffect(() => {

    axios.get(url).then(response => {
      setPokemon(response.data)
      if (favorites !== undefined && favorites !== null) {
        console.log(favorites)
        setFavorited(favorites.includes(response.data.id))
      }
    })


  }, [favorites, url])

  function toggleFavorite() {

    setFavorited(!favorited)

    localStorage.setItem('@pokedexFavorites', [favorites, pokemon.id])

    // const localFavorited = localStorage.getItem('@pokedexFavorites')

    // if (favorites !== null) {

    //   favorited
    //     ? localStorage.setItem('@pokedexFavorites', [...favorites, pokemon.id])
    //     : localStorage.setItem('@pokedexFavorites', favorites.filter(fav => fav.id !== pokemon.id))
    // }

  }

  return (
    <div className="card">

      <div className="card-header">
        <h1>{name}</h1>

        {!!favorited
          ? <FaHeart className="fav" onClick={() => toggleFavorite()} />
          : <FiHeart className="fav" onClick={() => toggleFavorite()} />
        }

      </div>


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
              !stat.stat.name.includes('-') &&
              <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
            ))}

          </ul>

        </>



      )}


    </div>
  );
};

export default Card;