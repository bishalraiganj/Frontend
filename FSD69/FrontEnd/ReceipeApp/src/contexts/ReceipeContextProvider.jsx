import ReceipeContext from '../JavaScript/ReceipeContext.js'
import { useState,useEffect } from 'react'
import Receipe from '../JavaScript/Receipe.js'
export default function ReceipeContextProvider({ children })
{

    const randomInt = Math.floor(Math.random() * 50000001);
    const [receipes,setReceipes] = useState([]);
    const [userSession,setUserSession] = useState({username:`Guest${randomInt}`,name:'AdhikaryX Systems',email:"adhikarysystems@gmail.com"});

    useEffect(()=>{

        console.log(`! rcm mounted !`);
    },[]);

    // useEffect(()=>{
    //     setRenderVal (renderVal+1);
    //     console.log("rcm rendered ")
    // });

    const addReceipe = (receipe)=>{
        if(receipe instanceof Receipe )
        {
            setReceipes((prev)=>[...prev,receipe])
        }

    }




    return(

        <ReceipeContext.Provider value={{receipes,addReceipeFunct:addReceipe,userSession,setUserSession}}>
            { children }
        </ReceipeContext.Provider>
    )



}