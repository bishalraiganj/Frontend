
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>

        <h1>This is The First Page </h1>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                |
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}


function Home(){
    return(
        <h1>
            Welcome to Home !
        </h1>
    )
}

function Contact()
{
    return(

        <h1>
        Contact Us
        </h1>
    )
}
export default App
