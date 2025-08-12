// import {useContext} from 'react';
// import PokemonsContext from './PokemonsContext.js'

import PokeApi from './PokeApi.jsx'
export default function PokeDex()
{
    // const {pokeArr,addToPokeArr} = useContext(PokemonsContext);

    return(

        <div>
            {/*here we will have the image of the poke dex and inside the display we will render the pokeApi*/}

            <PokeApi/>


        </div>

    )


}