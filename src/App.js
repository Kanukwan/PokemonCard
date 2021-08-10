import React, { useState } from 'react';

import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
import pokemons from './data/pokemons';
import PokemonPost from './components/PokemonPost';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0])
  const pokemonElement = pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon}/>;
  })

  let pokemonPost = null;
  if(!!selectedPokemon){
      pokemonPost = <PokemonPost/>
  }

  return (
    <div className="app">
        <AppHeader/>
        <div className="app-grid"> 
          {pokemonElement}
        </div>
        {pokemonPost}
    </div>
  );
}

export default App;
