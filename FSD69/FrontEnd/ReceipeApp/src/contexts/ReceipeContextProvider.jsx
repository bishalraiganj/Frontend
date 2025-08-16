import ReceipeContext from '../javaScript/ReceipeContext.js'
import { useState } from 'react'
import Receipe from '../JavaScript/Receipe.js'
export default function ReceipeContextProvider({ children })
{
    const [receipes,setReceipes] = useState([]);

    const addReceipe = (receipe)=>{
        if(receipe instanceof Receipe )
        {
            setReceipes((prev)=>[...prev,receipe])
        }

    }



    return(

        <ReceipeContext.Provider value={{receipes,addReceipeFunct:addReceipe}} >
            { children }
        </ReceipeContext.Provider>
    )



}