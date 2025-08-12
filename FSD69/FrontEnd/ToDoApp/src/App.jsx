
import {useRef} from 'react'
import './App.css'
import InputContextProvider from './components/InputContextProvider.jsx'
import Adder from './components/Adder.jsx'
import Container from './components/Container.jsx'
import ApiComponent from './components/ApiComponent.jsx'

function App() {

    const inputVal = useRef("");


  return (
    <>

        <InputContextProvider>
        <div className={"inputBox"} >
            <input className={"inputArea"} placeholder={"Enter Name"}

                   onChange={(e)=>{
                       inputVal.current = e.target.value;
                   }} />
            <Adder valueRef={inputVal}/>
            <Container/>

            <ApiComponent/>

        </div>
        </InputContextProvider>
    </>
  )
}

export default App
