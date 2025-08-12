
import {Component,useContext,useState} from 'react'
import InputContext from './InputContext.js'
import './ApiComponent.css'
export default function ApiComponent() {

    const {apiData,updateApiDataFunct} = useContext(InputContext);

    const [showStatus, setShowStatus] = useState(false);


    const handleClick = ()=>{

        setShowStatus(prev=>!prev);
    }

    const randomInt = Math.floor(Math.random() * 151);

    const fetchApiData = ()=>{
       return  fetch(`https://pokeapi.co/api/v2/pokemon/${randomInt+1}`)
            .then(res => res.json())
            .catch((err)=>{
                console.log("Fetch Error:" ,err);
                return null;
            });
    }

    const handleAddApi = ()=>{

        fetchApiData().then(data=>{
            if(data)
            {
                updateApiDataFunct(data);
            }
        });
    };


    return (

        <div className={"apiBox"}>

            <div className={"triggerBox"}>
                <button className={"triggerButton"} onClick={handleClick} >{showStatus===true ?"hide" : "show" }</button>
                <button className={"addApiDataBtn"} onClick={handleAddApi}>Capture Pokemon</button>
                {showStatus && (
                    <ul className={"pokeList"}>
                        {apiData.map((entity,index)=>(
                            <li key={index} style={{marginBottom:'20px'}}>
                                <div style={{fontWeight:'bold',fontSize:'18px'}}>
                                    {entity.name}
                                </div>
                                <img
                                    src={entity.sprites?.front_default}
                                    alt={entity.name}
                                    width={120}
                                    />
                            </li>

                        ))}
                    </ul>
                )}

            </div>


        </div>


    )


}