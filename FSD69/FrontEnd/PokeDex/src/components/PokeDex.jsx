import {useContext,useState,useEffect} from 'react';
import PokemonsContext from './PokemonsContext.js'

import PokeApi from './PokeApi.jsx'
export default function PokeDex()
{
    const [showStatus,setShowStatus] = useState(false);
    const {pokeArr} = useContext(PokemonsContext);

    useEffect(()=>{
        console.log("PokeDex component Did mount / rendered\n ");

    })

    return(

        <div>
            {/*here we will have the image of the poke dex and inside the display we will render the pokeApi*/}

            <PokeApi/>
            <div className={"showPokemonsBox"} >
                <button onClick={()=>{
                    setShowStatus(!showStatus)
                }}>
                    {showStatus===true? "Hide Pokemons" : "Show Pokemons"}
                </button>
                {showStatus &&
                <ul>

                    {pokeArr.map((pokemon,index)=>(<li key={index} >

                        <img src={pokemon.sprites?.front_default}/>
                        </li> ) )}
                </ul>}
            </div>
        </div>


    )


}