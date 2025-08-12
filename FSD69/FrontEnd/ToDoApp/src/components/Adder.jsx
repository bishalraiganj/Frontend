import {useContext} from 'react';
import InputContext from '../components/InputContext.js'



export default function Adder({valueRef})
{

    const {addFunct} = useContext(InputContext);

    const handeleClick = ()=>{
        const value = valueRef.current;
        if(value !== "")
        {
            addFunct(value);
            valueRef.current = "";
        }
        document.querySelector('.inputArea').value="";


    }

    return(
        <div className={"adderBox"} >

            <button className={"adderButtton"} onClick={handeleClick}>
                add
            </button>
        </div>

    )



}