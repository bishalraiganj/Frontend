import {useState} from 'react';
import PokemonsContext from './PokemonsContext.js'

export default function PokemonsProvider({ children }) {

    const [pokeArr,setPokeArr] = useState([]);
    const addToPokeArr = ()=>{
        setPokeArr((pokemon)=>[...pokeArr,pokemon]);
    }

    return(
        <PokemonsContext.Provider value={{pokeArr,addToPokeArr:addToPokeArr}}>
            { children}
        </PokemonsContext.Provider>
    )



}