import React, { useEffect, useState } from 'react';

import api from '../../services/api'
import SearchBar from '../../components/SearchBar'
import List from '../../components/List'
import Card from '../../components/Card'

const Pokedex = () => {

  const [pokemon, setPokemon] = useState('')
  const [url, setUrl] = useState('')
  const [favorites, setFavorites] = useState(localStorage.getItem(['@pokedexFavorites']))

  useEffect(() => {

    const poke = Math.floor(Math.random() * 600)

    api.get(`/pokemon/${poke}`).then(res => {
      setPokemon(res.data)
    })

    setUrl(`https://pokeapi.co/api/v2/pokemon/${poke}`)

  }, [])

  async function searchPokemon(id) {

    await api.get(`/pokemon/${id}`).then(res => {
      // eslint-disable-next-line no-mixed-operators
      !!res.data.name && setPokemon(res.data) || setUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id}`)
    })


  }
  return (
    <div className="pokedex">
      <SearchBar handleSearch={searchPokemon} />
      <Card name={pokemon.name} url={url} favorites={favorites} />
      <List favorites={favorites} />
    </div>)
}

export default Pokedex;