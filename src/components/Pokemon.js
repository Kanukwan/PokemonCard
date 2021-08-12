import './Pokemon.css';

function Pokemon(props) {
    const { pokemon, onPokemonClick } = props;

    return (
        <div className="unit-pokemon">
            <img src={pokemon.thumbnailUrl}  onClick={() => {onPokemonClick(pokemon)}}/>
            <h4>{pokemon.title}</h4>
        </div>
        
    );
}

export default Pokemon;