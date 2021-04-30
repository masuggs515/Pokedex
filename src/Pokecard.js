import './Pokecard.css'

const Pokecard = ({name, type, EXP, id}) =>{
    return (
        <div className='Pokecard'>
            <h3 className='Pokecard-name'>{name}</h3>
            <img alt='' className='Pokecard-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <div className='Pokecard-details'>
                <p> Type: {type}</p>
                <p> EXP: {EXP}</p>
            </div>

        </div>
    )
}

export default Pokecard;