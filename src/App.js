import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
// import PokemonPost from './PokemonPost';

const pokemon1 = {
    title: "Dex1-1",
    thumbnailUrl:"/images/dex1-1.png"
};


function App() {
  return (
    <div className="app">
        <AppHeader/>
        <div className="app-grid"> 
          <Pokemon pokemon={pokemon1}/>
        </div>
    </div>
  );
}

export default App;
