function UserProfile(props)
{
    return(

        <div style={{display:'flex',
            border:'2px solid yellow',
            borderRadius:'20px',
            backgroundColor:'skyblue',
            width:'240px' ,
            height: '300px',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'0px'
            }}>

            <h2>User: {props.name}</h2>
            <p>email: {props.email}</p>
            <p>age: {props.age}</p>
        </div>


    )
}


export default UserProfile;