import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ReceipeContextProvider from './contexts/ReceipeContextProvider.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
function App() {


  return (
    <>

        {/*<h1>*/}
        {/*    Test */}
        {/*</h1>*/}


      <BrowserRouter>
        <ReceipeContextProvider>

            <div className={"main-container"}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
            </div>

        </ReceipeContextProvider>
        </BrowserRouter>




    </>
  )
}

function Dashboard()
{
    return(
        <h1>
            Dashboard ! logged In !
        </h1>
    )

}

export default App
