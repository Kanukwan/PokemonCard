import './Pokemon.css';

function Pokemon(props) {
    const {title, thumbnailUrl} = props;

    return (
        <div className="unit-pokemon">
            <img src={thumbnailUrl}/>
            <h4>{title}</h4>
        </div>
        
    );
}

export default Pokemon;