import './App.css';
import AppHeader from './components/AppHeader';
import Pokemon from './components/Pokemon';
// import PokemonPost from './PokemonPost';

function App() {
  return (
    <div className="app">
        <AppHeader/>
        <div className="app-grid"> 
          <Pokemon title="Dex1-1" thumbnailUrl="/images/dex1-1.png"/>
          <Pokemon title="Dex1-2" thumbnailUrl="/images/dex1-2.png"/>
          <Pokemon title="Dex1-3" thumbnailUrl="/images/dex1-3.png"/>

          <Pokemon title="Dex2-1" thumbnailUrl="/images/dex2-1.png"/>
          <Pokemon title="Dex2-2" thumbnailUrl="/images/dex2-2.png"/>
          <Pokemon title="Dex2-3" thumbnailUrl="/images/dex2-3.png"/>

          <Pokemon title="Dex3-1" thumbnailUrl="/images/dex3-1.png"/>
          <Pokemon title="Dex3-2" thumbnailUrl="/images/dex3-2.png"/>
          <Pokemon title="Dex3-3" thumbnailUrl="/images/dex3-3.png"/>
        </div>
    </div>
  );
}

export default App;
