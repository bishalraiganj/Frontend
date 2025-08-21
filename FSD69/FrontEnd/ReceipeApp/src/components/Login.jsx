

import {useRef,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import ReceipeContext from '../JavaScript/ReceipeContext.js'

export default function Login()
{
    const navigate = useNavigate();
    const userInput = useRef("");
    const passInput = useRef("");
    const {setUserSession } = useContext(ReceipeContext);


    const fetchUserSession = async()=>{

        const payload = {
            username:userInput.current,
            password:passInput.current

        }

        const response = await fetch('/api/fetch/getUserSession',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        });
        const result = await response.json();

        setUserSession(result);
        console.log(result);
    };


    const handleClick =async () => {

        const payload = {
            username:userInput.current,
            password:passInput.current
        };

        try{

            const response = await fetch("/api/fetch/authenticate",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            });

            const result =  await response.json();
            if(result===true)
            {

                 await fetchUserSession();
                navigate("/dashboard");
            }
            else
            {
                alert("Ohh boy :-O Login Failed! ");
            }
        }catch(error)
        {
            console.error("Error during login:",error);
            alert("Login Failed :-0 Ohh BOY ! Check code ");
        }


    };

    const handleRegisterButton = ()=>{


        navigate("/register");
    }

    return(

        <div>
            <div className={'loginBox'} >
               <span className={"usernameBox"} >
                   <input maxLength={20} style={{width:'98%',height:'87%'}} onChange={(e)=>{
                   userInput.current=e.target.value}} placeholder={"username"} />
               </span>

                <span className={"passwordBox"} >
                <input   style={{width:'98%',height:'87%',border:'grey solid 2px'}} maxLength={20} type="password" onChange={(e)=>{
                    passInput.current = e.target.value;
                }} placeholder={"password "} />
                </span>
                <span className={"loginButtonBox"} >
                    <button   className={"loginButton"} onClick={()=>{
                        handleClick()
                    }}>Login</button>
                </span>
                <span className={"registerBox"} >
                    <button className={"registerButton"}  onClick={handleRegisterButton} >Register</button>
                </span>


            </div>


        </div>

    )



}



