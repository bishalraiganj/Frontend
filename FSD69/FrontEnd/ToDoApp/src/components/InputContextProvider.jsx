
import {useState} from 'react' ;
import InputContext from './InputContext.js'

export default function InputContextProvider({children})

{


    const [arr,setState] = useState([]) ;

    const add= (value)=>{
        setState(prevState =>[...prevState,value]);
    }

    return (
                <InputContext.Provider value={{inputArr:arr,addFunct:add}}>
                    {children}
                </InputContext.Provider>


    )






}