import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
import pokemons from './data/pokemons';
// import PokemonPost from './PokemonPost';

function App() {

  const pokemonElement = pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon}/>;
  })

  return (
    <div className="app">
        <AppHeader/>
        <div className="app-grid"> 
          {pokemonElement}
        </div>
    </div>
  );
}

export default App;
