
import {useContext,useEffect} from 'react'
import PokemonsContext from './PokemonsContext.js'

export default function PokeApi()
{

    const {addToPokeArr,currentPokemon,setCurrentPokemon} = useContext(PokemonsContext);


    useEffect(()=>{
        console.log("PokeApi component did mount / rendered")
    })


    const fetchPokemon = ()=>{
        const randomIndex = Math.floor(Math.random() * 300 + 1);
        return fetch('https://pokeapi.co/api/v2/pokemon/'+randomIndex)
            .then(res => res.json())
            .catch(err => {console.log("Fetch Pokemon Error: ",err)});

    };

    const throwPokeBall = (pokemon)=>{
        const randomInt = Math.floor(Math.random() * 11 );
        if(randomInt<=5 && randomInt>=3)
        {
            addToPokeArr(pokemon);
        }

    }

    return(
        <div className={"pokeApiBox"}>
            <div className={"pokemonDisplay"}>
               <span className={"currentPokemonName"} >
                   {currentPokemon.name}
               </span>
                <div className={"currentPokemonImg"}>
                    <img src={`${currentPokemon.sprites?.front_default}`} alt={currentPokemon.name}/>
                </div>
            </div>
            <span className={"findPokemon"} >
                <button className={"findPokemonButton"} onClick={()=>
                {
                    setCurrentPokemon({name:'Finding....' ,sprites:{}});
                    fetchPokemon().then((pokemon)=> setCurrentPokemon(pokemon));
                }}>
                    Hunt Pokemon
                </button>
            </span>
        <span className={"throwBall"}>
            <button className={"throwBallButton"} onClick={()=>{throwPokeBall(currentPokemon)}} >
                Throw</button>
        </span>

        </div>
    )



}