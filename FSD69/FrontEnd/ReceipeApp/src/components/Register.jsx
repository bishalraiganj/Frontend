

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import '../style/Register.css';

export default function Register()
{
    const navigate = useNavigate();
    const username = useRef("");
    const password = useRef("");
    const name = useRef("");
    const email = useRef("");

    const validateInfo = ()=>{

        if(username.current.length < 5 || password.current.length < 5 ||
        name.current.length < 5 || email.current.length < 5 )
        {
            return false;
        }
        return true;
    }


    const registerProcess =async ()=>{

        if(validateInfo()) {
            const payload = {
                username: username.current.trim(),
                password: password.current.trim(),
                name: name.current.trim(),
                email: email.current.trim()
            }


            const response = await fetch("/api/fetch/regUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result === true) {
                alert("Successfully Registered ! :-) ");
                navigate("/");
            } else {
                alert(" Try Again :-0 !");
            }
        }else
        {
            alert("Please enter valid information , follow instruction ;-) ");
        }

    }

    return(
        <div className={"register-container"}>
            <span className={"uNameBox"} >
                <text style={{color:'blue'}}>USERNAME</text>
                <input id={"uId"} type="text" maxLength="20" placeholder={"       username(letters and nums only) "} onChange={(e)=>username.current=e.target.value} />
            </span>
            <span className={"passBox"} >
                <text style={{color:'blue'}}>PASSWORD</text>
                <input id={"passId"} type="password" maxLength="20" placeholder={"       Atleast one number and special character "} onChange={(e)=>{
                    password.current=e.target.value;
                }}/>
            </span>
            <span className={"nameBox"} >
                <text style={{color:'blue'}} >FULL NAME</text>
                <input id={"nameId"} type="text" maxLength="100" placeholder={"        Full Name "} onChange={(e)=>{
                name.current=e.target.value;
            }} />
            </span>
            <span className={"emailBox"} >
                <text style={{color:'blue'}} >EMAIL</text>
                <input id={"emailId"} type="email" maxLength="100" placeholder={"        Email "} onChange={(e)=>{
                    email.current=e.target.value;
                }}/>
            </span>
            <span className={"rBtnBox"} >
                <button className={"registerBtn"} onClick={()=>{registerProcess()

                }}>
                    Register
                </button>
            </span>
        </div>

    )


}

