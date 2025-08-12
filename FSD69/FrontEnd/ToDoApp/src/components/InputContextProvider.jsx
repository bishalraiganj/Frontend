
import {useState} from 'react' ;
import InputContext from './InputContext.js'

export default function InputContextProvider({children})

{


    const [arr,setState] = useState([]) ;

    const[apiData,setApiData] = useState([]);

    const addApiData = (newEntity) =>{

        if(newEntity && Object.keys(newEntity).length!==0)
        {
            setApiData(prevData => [...prevData,newEntity]);
        }

}

    const add= (value)=>{
        setState(prevState =>[...prevState,value]);
    }

    return (
                <InputContext.Provider value={{inputArr:arr,addFunct:add,apiData:apiData,updateApiDataFunct:addApiData}}>
                    {children}
                </InputContext.Provider>


    )






}