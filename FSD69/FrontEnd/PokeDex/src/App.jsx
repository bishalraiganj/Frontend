// import { useState } from 'react'
import './App.css'
import PokeDex from './components/PokeDex.jsx'
import PokemonsContextProvider from './components/PokemonsContextProvider.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div  className={"logoImage"}>
            <img src={'https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' } alt={'logo'}  />
        </div>
        <PokemonsContextProvider>
      <PokeDex>

      </PokeDex>
        </PokemonsContextProvider>
    </>
  )
}

export default App
