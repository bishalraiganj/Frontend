import {useState} from 'react';
import PokemonsContext from './PokemonsContext.js'

export default function PokemonsProvider({ children }) {

    const [pokeArr,setPokeArr] = useState([]);
    const [currentPokemon,setCurrentPokemon]  = useState({});

    const addToPokeArr = (pokemon)=>{
        if(Object.keys(pokemon).length > 0) {
            setPokeArr((prev) => [...prev, pokemon]);
        }
    }

    return(
        <PokemonsContext.Provider value={{pokeArr,addToPokeArr:addToPokeArr,currentPokemon,setCurrentPokemon}}>
            { children }
        </PokemonsContext.Provider>
    )



}