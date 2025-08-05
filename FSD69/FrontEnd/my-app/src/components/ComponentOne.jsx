function ComponentOne()
{

    let num1 = Math.floor(Math.random() * 5);
    let num2 = Math.floor(Math.random() * 5);

    if (num1 === num2)
    {
        return(
            <div><h1>Winner Winner Chicken Dinner !</h1>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnWaWZyJ6mkPorpce_cf5tam2uvOTf5xEGA&s"/>
                <h2>{num1} | {num2}</h2>
                <img src = "https://i.pinimg.com/originals/aa/cc/83/aacc835a732af08e2f26854df0d5806e.gif" width='190' height='190'/>
            </div>
        )
    }

    return(
        <></>

    )
}

export default ComponentOne