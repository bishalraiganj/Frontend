function Greet(props)
{

    return(

        <div>

                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3IzdW96YmhkN2R1eHZlb2l4aWt2bXA5N3V3b29rb3J0dzBoMmw4YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dzaUX7CAG0Ihi/giphy.gif" style={{marginBottom:'0px'}}/>
            <h3 style={{color:'blue',fontSize:'50px',marginTop:'0px',marginBottom:'0px'}}>Hello {props.name}</h3>
        </div>
    )

}

export default Greet;