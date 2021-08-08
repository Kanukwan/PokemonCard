import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
// import PokemonPost from './PokemonPost';

const pokemons = [
  {
    title: "Dex1-1",
    thumbnailUrl:"/images/dex1-1.png"
  },
  {
    title: "Dex1-2",
    thumbnailUrl:"/images/dex1-2.png"
  },
  {
    title: "Dex1-3",
    thumbnailUrl:"/images/dex1-3.png"
  },
];


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
