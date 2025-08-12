import InputContext from './InputContext.js'
import {useContext} from 'react'


export default function Container()
{
    const {inputArr} = useContext(InputContext);

    return (

        <div className={"containerBox"} >
            <ul>
                {inputArr.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>

    )



}