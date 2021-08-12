import React, { useState } from 'react';

import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
import pokemons from './data/pokemons';
import PokemonPost from './components/PokemonPost';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null)

  function onPokemonOpenClick(thePokemon) {
    setSelectedPokemon(thePokemon);
  }

  function onPokemonCloseClick() {
    setSelectedPokemon(null);
  }

  const pokemonElement = pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} onPokemonClick={onPokemonOpenClick}/>;
  })

  let pokemonPost = null;
  if(!!selectedPokemon){
      pokemonPost = <PokemonPost pokemon={selectedPokemon} onBgClick={onPokemonCloseClick}/>
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
