import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Dashboard from './components/Dashboard.jsx'
import ReceipeContextProvider from './contexts/ReceipeContextProvider.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
function App() {


  return (
    <>

        {/*<h1>*/}
        {/*    Test */}
        {/*</h1>*/}



        <ReceipeContextProvider>
      <BrowserRouter>


            <div className={"main-container"}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
            </div>

        </BrowserRouter>
    </ReceipeContextProvider>






</>
  )
}



export default App
