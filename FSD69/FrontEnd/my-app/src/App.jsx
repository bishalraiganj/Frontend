// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import ComponentOne from './components/ComponentOne.jsx'
import Greet from './components/Greet.jsx'
import UserProfile from './components/UserProfile.jsx'
import List from './components/List.jsx'
import Users from './components/Users.jsx'


function App() {
  // const [count, setCount] = useState(0)

    const namesArr =  ["Bishal","Jashika","Sameer","Rishit","Amir","Jeffrey"];
    const intVal = Math.floor(Math.random() * (namesArr.length));

    const usersArr = [{name: "Bishal Adhikary ", email:"bishaladhikaryreal@gmail.com"
    ,age:25},{name:"Jashika", email:"jashikaisLoco@gmail.com" , age:108}];
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        // height:'100vh',

    }}>

        <Greet name={namesArr[intVal]}/>
        <UserProfile name={namesArr[intVal]} email={"abc@gmail.com"}  age={1}/>

        <ComponentOne/>

        <List movieNames={["SpiderMan","Venom","John_Nash"] } title={"Hollywood"}/>
        <Users children={usersArr}/>


    </div>
  )
}

export default App
