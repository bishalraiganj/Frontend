
import { useContext,useEffect,useState,useRef} from 'react'
import Login from './Login.jsx'
import ReceipeContext from "../JavaScript/ReceipeContext.js"
import  '../style/Dashboard.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
export default function Dashboard() {

    const {userSession} = useContext(ReceipeContext);
    const searchText = useRef("");

    const [errorStat,setErrorState] =useState(false);

    const [currentRecipe,setRecipe] = useState({
    title:'',
        description:'',
        ingredients:[],
        instructions:[]
    });



    const findRecipe = async()=> {

        if (!userSession.username.includes('Guest')) {
            const payload = {

                title: searchText.current
            }


            const response = await fetch("api/fetch/fetchRecipe", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if(response.ok)
            {
                setErrorState(false);

            }else
            {
                setErrorState(true);
            }

            const result = await response.json();

            if (result && result.title && result.title.length > 1) {
                setRecipe(result);
                console.log(result.title + '\n' + result.description + '\n' + result.ingredients + result.instructions);
            }

        }

    }


    // const searchText = useRef('');







    useEffect(()=>{
        console.log(" Dashboard Mounted")
    },[]);

    console.log(" Dashboard rendered ");


    return(



        <div className={"dContainer"} >

            <span className={"headerSpan"}>

              <p className={"dHeader"} >
                  Name: {userSession.name }
              </p>
              <nav className={"dNav"} >
                  <ul>
                      <li ><Link to="/" >{!userSession.username.includes('Guest')? 'Logout' : 'Login' }</Link></li>
                      {/*<li ><Link to="/home">Home</Link></li>*/}
                  </ul>
              </nav>
            </span>



            <div className={"searchBox"} >
                <span className={"searchLineBox"} >
                    <input type={"text"} placeholder={"Search... recipes "}  onChange={(e)=>searchText.current=e.target.value}>

                    </input>
                     <button  className={"searchButton"} onClick={()=>(
                         findRecipe()
                     )} >search</button>
                </span>

                {!userSession.username.includes("Guest") && !errorStat && currentRecipe.title && currentRecipe.title.length>1  && (
                <div className={"foundRecipeBox"}>
                    <h5>Title : {currentRecipe.title}</h5>
                    <h5>Description : {currentRecipe.description}</h5>
                    <h5>Ingredients :
                        <ul>{currentRecipe.ingredients.map((e,index)=>(
                        <li key={index}>{e}</li>
                        ))}
                        </ul>
                    </h5>

                    <h5>Instructions: <ul>{
                        currentRecipe.instructions.map((e,index)=>(
                            <li key={index}> {e}</li>
                        ))
                    }
                    </ul>
                    </h5>

                </div>)}

                {userSession.username.includes('Guest') &&

                     <h5> You are NOT LOGGED IN ! </h5>
                }
                
            </div>





        </div>



    )




}