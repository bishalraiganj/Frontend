function List({movieNames, title})
{



    return(
        <>
        <h3>
            {title}
        </h3>
            <ul>

                {movieNames.map((name,index)=>(
                    <li key={index} >{name}</li>
                ))}
            </ul>


        </>



    )
}


export default List;