import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
// import PokemonPost from './PokemonPost';

function App() {
  return (
    <div className="app">
        <AppHeader/>
        <div className="app-grid"> 
          <Pokemon/>
          <Pokemon/>
          <Pokemon/>
        </div>
    </div>
  );
}

export default App;
