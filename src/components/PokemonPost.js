import './PokemonPost.css'

function PokemonPost(props) {
    const {pokemon} = props;

    return (
        <div className="pokemon-post">
            <div className="pokemon-post-bg">
            <div className="pokemon-post-content">
                <img src={pokemon.thumbnailUrl}/>
                <h4>{pokemon.title}</h4>
            </div>
            </div>
        </div>
        
    );
}

export default PokemonPost;