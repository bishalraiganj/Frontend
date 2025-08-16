

import { useRef } from 'react';
import '../style/Register.css';

export default function Register()
{
    const username = useRef("");
    const password = useRef("");
    const name = useRef("");
    const email = useRef("");


    return(
        <div className={"register-container"}>
            <span className={"uNameBox"} >
                <input type="text" placeholder={" username(letters and nums only) "} onChange={(e)=>username.current=e.target.value} />
            </span>
            <span className={"passBox"} >
                <input type="password" placeholder={"! Atleast one number and special character !"} oncChange={(e)=>{
                    password.current=e.target.value;
                }}/>
            </span>
            <span className={"nameBox"} >
                <input type="name" placeholder={"Full Name (MAX-100Chars)"} onChange={(e)=>{
                name.current=e.target.value;
            }} />
            </span>
            <span className={"emailBox"} >
                <input type="email" placeholder={" Email "} onChange={(e)=>{
                    email.current=e.target.value;
                }}/>
            </span>
            <span className={"rBtnBox"} >
                <button className={"registerBtn"} onClick={()=>{

                }}>
                    Register
                </button>
            </span>
        </div>

    )


}