// import { useState } from 'react'
import './App.css'
import PokeDex from './components/PokeDex.jsx'
import PokemonsContextProvider from './components/PokemonsContextProvider.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <PokemonsContextProvider>
      <PokeDex>

      </PokeDex>
        </PokemonsContextProvider>
    </>
  )
}

export default App
