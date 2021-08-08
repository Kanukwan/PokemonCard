import './Pokemon.css';

function Pokemon(props) {
    const { pokemon } = props;

    return (
        <div className="unit-pokemon">
            <img src={pokemon.thumbnailUrl}/>
            <h4>{pokemon.title}</h4>
        </div>
        
    );
}

export default Pokemon;